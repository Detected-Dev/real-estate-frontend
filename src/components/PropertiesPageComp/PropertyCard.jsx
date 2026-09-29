import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigrate = useNavigate();
  const {
    id,
    title,
    transaction_type,
    price,
    address,
    city,
    surface,
    bedrooms,
    bathrooms,
    images
  } = property;
  return (
    <div className="p-card" href="#" onClick={() => navigrate(`/properties/${id}`)}>
      <div className="p-card-media">
        <img className="property-small-img" src={images.length > 0 
          ? `http://localhost:8000/storage/${images[0].image_url}`
          : `/not-found.jpg`} alt="" />
        <span className="p-badge rent">{transaction_type}</span>
      </div>
      <div className="p-card-body">
        <h3>{title}</h3>
        <p className="p-card-location">
          {address}, {city}
        </p>
        <div className="p-card-meta">
          <span>{bedrooms} Beds</span>
          <span className="dot">·</span>
          <span>{bathrooms} Baths</span>
          <span className="dot">·</span>
          <span>{surface} m²</span>
        </div>
        <div className="p-card-price">
          {price} MAD
          {transaction_type === "rent" ? <span>/ Month</span> : <span></span>}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
