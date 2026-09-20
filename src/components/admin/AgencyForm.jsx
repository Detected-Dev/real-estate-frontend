import { useState } from "react";
import api from '../../api/axios';

const AgencyForm = ({setToggleActions,method,agency,getAgencies}) => {
  const [formData, setFormData] = useState(agency || {
    name : null ,
    address : null ,
    city : null ,
    email : null ,
    telephone : null ,
    description : null,
    password : null,
    password_confirmation : null,
    profile_image : null
  })
  const handleForm = (e) => {
    setFormData(prev => ({
      ...prev , [e.target.name] : e.target.value
    }))
  } 
  const handleSubmit = async(e) => {
    e.preventDefault();
  if(method === 'PUT'){
    try{
        await api.get("/sanctum/csrf-cookie");
        const endpoint = `/api/agencies/${agency.id}`;
        const response = await api.put(endpoint,formData);
        console.log(response.data.message)
      }catch(error){
        console.log(error , 'Failed PUT ');
        console.log(error.response?.data , 'Failed PUT ')
      }           
    }else{
        try{
          await api.get("/sanctum/csrf-cookie");

          const data = new FormData();
          data.append('name' , formData.name);
          data.append('address' , formData.address);
          data.append('city' , formData.city);
          data.append('email' , formData.email);
          data.append('telephone' , formData.telephone);
          data.append('description' , formData.description);
          data.append('password' , formData.password);
          data.append('password_confirmation' , formData.password_confirmation);
          data.append('profile_image' , formData.profile_image);

          const endpoint = `/api/agencies/`;
          const response = await api.post(endpoint,data);
          
          console.log(response.data.message);
        }catch(error){
            console.log(error.response?.data);
            console.log(error, 'Failed POST');
        }
    }
    await getAgencies();
    setToggleActions(prev => ({
      ...prev , addAgencyBtn : false,editAgency : null
    }))
    
  }
  return (
    <div className="editAdmin_form">
  <div className="editAdmin_form_container">
    <h1>{method === "PUT" ? "Edit" : "Add"} Agency</h1>
    <form action="" onSubmit={(e) => { handleSubmit(e) }}>

      {method === "POST" && (
        <div className="form_row form_row_full">
          <div className="form_group">
            <label htmlFor="">Logo</label>
            <input
              type="file"
              defaultValue=""
              name="profile_img"
              onChange={(e) => setFormData(prev => ({
                ...prev, profile_image: e.target.files[0]
              }))}
            />
          </div>
        </div>
      )}

      <div className="form_row">
        <div className="form_group">
          <label htmlFor=""> Name</label>
          <input
            type="text"
            defaultValue={formData.name}
            name="name"
            onChange={(e) => { handleForm(e) }}
          />
        </div>
        <div className="form_group">
          <label htmlFor=""> Address</label>
          <input
            type="text"
            defaultValue={formData.address}
            name="address"
            onChange={(e) => { handleForm(e) }}
          />
        </div>
      </div>

      <div className="form_row">
        <div className="form_group">
          <label htmlFor=""> City</label>
          <input
            type="text"
            defaultValue={formData.city}
            name="city"
            onChange={(e) => { handleForm(e) }}
          />
        </div>
        <div className="form_group">
          <label htmlFor=""> Telephone</label>
          <input
            type="text"
            defaultValue={formData.telephone}
            placeholder=""
            name="telephone"
            onChange={(e) => { handleForm(e) }}
          />
        </div>
      </div>

      <div className="form_row">
        <div className="form_group">
          <label htmlFor=""> Email</label>
          <input
            type="email"
            defaultValue={formData.email}
            name="email"
            onChange={(e) => { handleForm(e) }}
          />
        </div>
        {method === 'POST' && (
          <div className="form_group">
            <label htmlFor=""> Password</label>
            <input
              type="password"
              defaultValue={formData.password}
              placeholder=""
              name="password"
              onChange={(e) => { handleForm(e) }}
            />
          </div>
        )}
      </div>

      {method === 'POST' && (
        <div className="form_row">
          <div className="form_group">
            <label htmlFor=""> Confirm Password</label>
            <input
              type="password"
              defaultValue={formData.password_confirmation}
              placeholder=""
              name="password_confirmation"
              onChange={(e) => { handleForm(e) }}
            />
          </div>
          <div className="form_group"></div>
        </div>
      )}

      <div className="form_row form_row_full">
        <div className="form_group">
          <label htmlFor=""> Description</label>
          <textarea
            name="description"
            defaultValue={formData.description}
            placeholder="DESCRIPTION"
            id=""
            onChange={(e) => { handleForm(e) }}
          ></textarea>
        </div>
      </div>

      <div className="buttons_box">
        <button
          type="button"
          className="cancel_button"
          onClick={() => {
            setToggleActions(prev => ({
              ...prev, addAgencyBtn: false, editAgency: null
            }))
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="submit_button"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default AgencyForm;
