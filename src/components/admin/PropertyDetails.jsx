import React from 'react'

const PropertyDetails = ({property,setToggleActions}) => {
  return (
    <div className='editAdmin_form'>
          <div className='editAdmin_form_container'>
              <h1>Property Details</h1>
              <form action="" onSubmit={() => {}}>
                        <label htmlFor=""> Title</label>
                      <input readOnly placeholder='Title' type="text" defaultValue={property.title} name='title' onChange={() => {}} />
                        <label htmlFor=""> Address</label>
                      <input readOnly type="email" placeholder='Address' defaultValue={property.address} name='address' onChange={() => {}}/>
                        <label htmlFor=""> City</label>
                      <input readOnly type="text" defaultValue={property.city} placeholder='City' name='city' onChange={() => {}}/>
                        <label htmlFor=""> Price</label>
                      <input readOnly type="number" defaultValue={property.price} placeholder='Price' name='price' onChange={() => {}}/>
                        <label htmlFor=""> Postal Code</label>
                      <input readOnly type="text" defaultValue={property.postal_code} placeholder='Postal Code' name='postalCode' onChange={() => {}}/>
                        <label htmlFor=""> Type</label>
                      <input readOnly type="text" defaultValue={property.property_type.name} placeholder='Type' name='postalCode' onChange={() => {}}/>
                        <label htmlFor=""> Description</label>
                      <textarea readOnly name="description" defaultValue={property.description} placeholder='DESCRIPTION' id="" ></textarea>
                      <div className='buttons_box'>
                        <button type='button' className='cancel_button' onClick={() =>setToggleActions(prev => (
                            {
                                ...prev , propertyDetails : null
                            }
                        )) }>Cancel</button>
                      </div>
              </form>
          </div>
  
      </div>
  )
}

export default PropertyDetails