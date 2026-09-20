import React from "react";

const AgencyTableRow = ({agency,setToggleActions}) => {
    const createdDate = new Date(agency.created_at);
    console.log(agency)
  return (
    <tr >
      <td>{agency.id}</td>

      <td>
        <div className="agency-logo blue-logo">
          <img src={agency.user.profile_image 
            ? `http://localhost:8000/storage/${agency.user.profile_image}`
            : '/default.jpeg'
          } alt="" />
        </div>
      </td>

      <td>{agency.name}</td>
      <td>{agency.email}</td>
      <td>{agency.telephone}</td>
      <td>{agency.address}</td>
      <td>{agency.city}</td>
      <td>{`${createdDate.getDate()}/${createdDate.getMonth() + 1}/${createdDate.getFullYear()}`}</td>

      <td className="actions">
        <button className="edit" onClick={()=> setToggleActions(prev => ({
          ...prev , editAgency : agency
        }))}>Edit</button>
        <button className="delete" onClick={() => setToggleActions(prev => (
          {
            ...prev,deleteAgency : agency
          }
        ))}>Delete</button>
      </td>
    </tr>
  );
};

export default AgencyTableRow;
