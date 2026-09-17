import React from 'react'
import RealState from './RealState'
import SectionTitle from './SectionTitle'
import { useAuth } from '../context/AuthContext'

const PropertiesPage = (image ,title,location,price) => {
  const {properties} = useAuth();
  return (
    <>
      <div className='services section container'>
          <SectionTitle title="PROPERTIES" subtitle="Explore our handpicked selection of properties, from modern apartments to beautiful family homes." />
          <div className='card-srv'>
            {properties && properties.map((item,index) => (
              <RealState property={item}/>
            ))}
          </div>
      </div>
    </>
  )
}

export default PropertiesPage