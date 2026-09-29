import api from "../../api/axios";

const AgencyVisitTableRow = ({reloadDash,visit}) => {
    const acceptVisit = async() => {
    try{
      const response = await api.patch(`api/agency/propertyVisits/${visit.id}/accept`)
      console.log(response.data)
      reloadDash()

    }catch(error){
      console.log('failed to accept the property request ' , error)
    }
  }
  const rejectVisit = async() => {
    try{
      const response = await api.patch(`api/agency/propertyVisits/${visit.id}/reject`)
      console.log(response.data)
      reloadDash()

    }catch(error){
      console.log('failed to reject the property request ' , error)
    }
  }
  return (
    <tr>
      <td>
        <span className="who">{visit.user.name}</span>
      </td>
      <td>{visit.property.title}</td>
      <td className="muted-sm">{visit.scheduled_at}</td>
      <td className="actions">
        <button className="btn accept" onClick={() => acceptVisit()}>Accept</button>
        <button className="btn reject" onClick={() => rejectVisit() }>Reject</button>
      </td>
    </tr>
  );
};

export default AgencyVisitTableRow;
