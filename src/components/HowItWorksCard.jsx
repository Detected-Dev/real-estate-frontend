import React from 'react'

const HowItWorksCard = ({title,content}) => {
  return (
    <div className='how_it_work_card'>
        <p className='title'>{title}</p>
        <p className='card_content'>{content}</p>
    </div>
  )
}

export default HowItWorksCard