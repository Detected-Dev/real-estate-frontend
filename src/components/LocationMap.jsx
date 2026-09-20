import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./LocationMap.css";

// Fixes a common bundler issue where Leaflet's default marker icons 404
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function distanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Drop-in replacement for your "Location" card.
 * Usage: <LocationMap latitude={property.latitude} longitude={property.longitude}
 *                      title={property.title} address={property.address} />
 */
export default function LocationMap({ latitude, longitude, title, address }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const userMarkerRef = useRef(null);
  const lineRef = useRef(null);

  const [distanceText, setDistanceText] = useState(null);
  const [status, setStatus] = useState("");
  const [locating, setLocating] = useState(false);

  useEffect(() => {
    if (!latitude || !longitude || mapRef.current) return;

    const map = L.map(mapContainerRef.current).setView([latitude, longitude], 14);
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(`<b>${title || ""}</b><br>${address || ""}`);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [latitude, longitude, title, address]);

  const handleLocate = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation isn't supported by this browser.");
      return;
    }
    setLocating(true);
    setStatus("Requesting your location…");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude: userLat, longitude: userLng } = pos.coords;
        const map = mapRef.current;
        if (!map) return;

        if (userMarkerRef.current) map.removeLayer(userMarkerRef.current);
        if (lineRef.current) map.removeLayer(lineRef.current);

        const userIcon = L.divIcon({
          html: "📍",
          className: "",
          iconSize: [28, 28],
          iconAnchor: [14, 28],
        });

        userMarkerRef.current = L.marker([userLat, userLng], { icon: userIcon })
          .addTo(map)
          .bindPopup("You are here");

        // Try to get a real driving route from the free OSRM routing service
        // (no API key needed). Falls back to a straight line if it fails.
        try {
          const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${userLng},${userLat};${longitude},${latitude}?overview=full&geometries=geojson`;
          const res = await fetch(osrmUrl);
          const data = await res.json();

          if (data.code === "Ok" && data.routes?.length) {
            const route = data.routes[0];
            // GeoJSON coordinates come as [lng, lat] — Leaflet wants [lat, lng]
            const routeLatLngs = route.geometry.coordinates.map(([lng, lat]) => [lat, lng]);

            lineRef.current = L.polyline(routeLatLngs, {
              color: "#e63946",
              weight: 4,
            }).addTo(map);

            map.fitBounds(lineRef.current.getBounds(), { padding: [40, 40] });

            const km = route.distance / 1000;
            setDistanceText(
              km < 1 ? `${Math.round(route.distance)} m by road` : `${km.toFixed(1)} km by road`
            );
          } else {
            throw new Error("No route found");
          }
        } catch (routeErr) {
          // Fallback: straight-line distance, clearly labeled as such
          lineRef.current = L.polyline(
            [
              [userLat, userLng],
              [latitude, longitude],
            ],
            { color: "#e63946", weight: 3, dashArray: "8, 8" }
          ).addTo(map);

          map.fitBounds(lineRef.current.getBounds(), { padding: [40, 40] });

          const km = distanceKm(userLat, userLng, latitude, longitude);
          setDistanceText(
            km < 1
              ? `${Math.round(km * 1000)} m away (straight line)`
              : `${km.toFixed(1)} km away (straight line)`
          );
        }

        setStatus("");
        setLocating(false);
      },
      (err) => {
        setLocating(false);
        setStatus(
          err.code === err.PERMISSION_DENIED
            ? "Location access was denied. Enable it in your browser settings to see the distance."
            : "Couldn't get your location. Please try again."
        );
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  if (!latitude || !longitude) {
    return (
      <div className="location-map-card">
        <p className="location-map-empty">Location not available for this property yet.</p>
      </div>
    );
  }

  const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;

  return (
    <div className="location-map-card">
      <div ref={mapContainerRef} className="location-map-container" />
      <div className="location-map-footer">
        {distanceText && (
          <span className="distance-badge">
            <span className="distance-dot" />
            <span className="distance-text">{distanceText}</span>
          </span>
        )}
        <div className="location-map-actions">
          <button
            onClick={handleLocate}
            disabled={locating}
            className="allow_location_btn"
          >
            Show The Distance
          </button>
          <a
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="waze-btn"
          >
            Navigate with Waze
          </a>
        </div>
      </div>
      {status && <p className="location-map-status">{status}</p>}
    </div>
  );
}