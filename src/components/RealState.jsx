import React from 'react'

const RealState = ({ property}) => {
  const {id,title,address,bedrooms,bathrooms,price,transaction_type,surface} = property 
  return (
    <div className="real-state" key={id}>
            <div className='image'>
            </div>
            <div className="card-srv-content">
                <h3>{title}</h3>
                <div className='grid'>
                  <img src="/position.svg" alt="position"/>
                  <p>{address}</p>
                </div>  
                <div className='grid'>
                  <img src="/details.svg" alt="position"/>
                  <p>{`${bedrooms} Beds · ${bathrooms} Baths · ${surface} m²`}</p>
                </div>  
                <div className='grid' style={{borderBottom : '1px solid rgb(192, 192, 192)' , padding : '10px'}}>
                  <img src="/price.svg" alt="position"/>
                  <p>{price} Dh</p>
                </div>  
                <div>
                  <a href='#a' className='action' onClick={() => console.log(property)}>more details</a>
                </div>
            </div>
            <div className='realSatate_status'>
              {transaction_type.toUpperCase()}
            </div>
            
        </div>
  )
}

export default RealState