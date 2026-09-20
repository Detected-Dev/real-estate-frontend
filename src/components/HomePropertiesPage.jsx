import React, { useEffect, useState } from 'react'
import RealState from './RealState'
import SectionTitle from './SectionTitle'
import api from "../api/axios"
import {Link} from "react-router-dom";

const HomePropertiesPage = (image ,title,location,price) => {
  const [homeProperties, setHomeProperties] = useState(null);
  const getHomeProperty = async() => {
    try{
      const response = await api.get('/api/properties?limit=8');
       setHomeProperties(response.data.data);
    }catch(error){
      console.log('FAILED FETCH HOME PROPERTIES');
    }
  }
  useEffect(() => {
    getHomeProperty();
  },[])
  return (
    <>
      <div className='services section container'>
          <SectionTitle title="PROPERTIES" subtitle="Explore our handpicked selection of properties, from modern apartments to beautiful family homes." />
          <div className='see_all_prop'>
            <Link to="/properties" className=''>See All properties</Link>
          </div>
          <div className='card-srv'>
            {homeProperties!==null && homeProperties.map((item,index) => (
              <RealState key={index} property={item}/>
            ))}
          </div>
      </div>
    </>
  )
}

export default HomePropertiesPage