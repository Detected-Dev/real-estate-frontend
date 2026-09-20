import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigrate = useNavigate();
  const {
    id,
    title,
    description,
    transaction_type,
    price,
    address,
    city,
    postal_code,
    surface,
    bedrooms,
    bathrooms,
    floors,
  } = property;
  return (
    <div class="p-card" href="#" onClick={() => navigrate(`/properties/${id}`)}>
      <div class="p-card-media">
        <span class="p-badge rent">{transaction_type}</span>
      </div>
      <div class="p-card-body">
        <h3>{title}</h3>
        <p class="p-card-location">
          {address}, {city}
        </p>
        <div class="p-card-meta">
          <span>{bedrooms} Beds</span>
          <span class="dot">·</span>
          <span>{bathrooms} Baths</span>
          <span class="dot">·</span>
          <span>{surface} m²</span>
        </div>
        <div class="p-card-price">
          {price} MAD
          {transaction_type === "rent" ? <span>/ Month</span> : <span></span>}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
