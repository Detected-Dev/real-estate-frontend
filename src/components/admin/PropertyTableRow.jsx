import React from "react";

const PropertyTableRow = ({property,setToggleActions}) => {
    const createdDate = new Date(property.created_at);
    
  return (
    <tr>
      <td>{property.id}</td>
      <td>{property.title}</td>

      <td>
        <span className="type villa">{property.property_type.name}</span>
      </td>

      <td>{property.price}DH</td>
      <td>{property.address}</td>
      <td>{property.city}</td>
      <td>{`${createdDate.getDate()}/${createdDate.getMonth() + 1}/${createdDate.getFullYear()}`}</td>

      <td className="actions">
        <button className="edit" onClick={() => setToggleActions(prev => (
          {
            ...prev,propertyDetails : property
          }
        ))}>Details</button>
        <button className="delete" onClick={() => setToggleActions(prev => (
          {
            ...prev,deleteProperty : property
          }
        ))}>Delete</button>
      </td>
    </tr>
  );
};

export default PropertyTableRow;
