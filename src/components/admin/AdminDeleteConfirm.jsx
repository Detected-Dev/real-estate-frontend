import React from 'react'
import api from "../../api/axios"

const AdminDeleteConfirm = ({property , agency,setToggleActions,getProperties,getAgencies}) => {
  
  const sendDeleteRequest = async() => {
    try{
      if(property){
        const response  = await api.delete(`/api/properties/${property.id}`);
        await getProperties();
        return response.data
      }else{
        const response  = await api.delete(`/api/agencies/${agency.id}`)
        await getAgencies();
        console.log(response.data.message);
      }
    }catch(error){
      console.log(error.response?.data?.message);
    }finally{
      setToggleActions(prev => ({
        ...prev , deleteProperty : null,deleteAgency : null
      }))
    }
  }
  return (
    <div className='deleteConfirm'>
      <div className='deleteConfirm_container'>
        <h4>Delete Customer</h4>
        <p>are you sure you want delete this  ?</p>
        <div className='buttons_box delete_btn_box'>
          <button type='button' onClick={() => setToggleActions(prev => (
            {
              ...prev , deleteProperty :null ,deleteAgency : null
            }
          ))}>Cancel</button>
          <button type='button' onClick={() => sendDeleteRequest()}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDeleteConfirm