import React from 'react'

const SectionTitle = ({title,subtitle}) => {
  return (
    <div className='SectionTitle'>
        <h1>{title}</h1>
        {subtitle && (<p className='subtitle'>{subtitle}</p>)}
    </div>
  )
}

export default SectionTitle