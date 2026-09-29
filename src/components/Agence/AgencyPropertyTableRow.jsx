import React from "react";

const AgencyPropertyTableRow = ({property}) => {
  return (
    <tr>
      <td className="who">{property.title}</td>
      <td>{property.transaction_type}</td>
      <td>{property.transaction_type === "rent" ? `${property.price} MAD / month` : `${property.price} MAD`}</td>
      <td>
        <span className={`status-pill ${property.status}`}>{property.status}</span> {/*The className is rented available rejected pending  */}
      </td>
      <td>{property.visits.length}</td>
    </tr>
  );
};

export default AgencyPropertyTableRow;
