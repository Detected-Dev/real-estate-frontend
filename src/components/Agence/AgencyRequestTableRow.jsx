import api from "../../api/axios"

const AgencyRequestTableRow = ({reloadDash,request}) => {
  const acceptRequest = async() => {
    try{
      const response = await api.patch(`api/agency/propertyRequests/${request.id}/accept`)
      console.log(response.data)
      reloadDash()

    }catch(error){
      console.log('failed to accept the property request ' , error)
    }
  }
  const rejectRequest = async() => {
    try{
      const response = await api.patch(`api/agency/propertyRequests/${request.id}/reject`)
      console.log(response.data)
      reloadDash()

    }catch(error){
      console.log('failed to reject the property request ' , error)
    }
  }
  return (
    <tr>
      <td>
        <span className="who">{request.user.name}</span>
      </td>
      <td>{request.property.address}</td>
      <td className="muted-sm">{request.property.transaction_type === "rent" ? `${request.property.price}MAD / mo` : `${request.property.price} MAD`}</td>
      <td className="actions">
        <button className="btn accept" onClick={() => acceptRequest()}>Accept</button>
        <button className="btn reject" onClick={() => rejectRequest()}>Reject</button>
      </td>
    </tr>
  );
};

export default AgencyRequestTableRow;
