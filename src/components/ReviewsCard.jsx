import React from 'react'

const ReviewsCard = ({comment , img , name , statu}) => {
  return (
    <div className='reviewCard'>
        <div className='stars'>
            <img src="/star.svg" alt="" width={20} />
            <img src="/star.svg" alt="" width={20} />
            <img src="/star.svg" alt="" width={20} />
            <img src="/star.svg" alt="" width={20} />
            <img src="/star.svg" alt="" width={20} />
        </div>
        <p className='comment'>{comment}</p>
        <div className='user'>
          <img src={`/${img}.png`} alt="" />
          <div className='user_details'>
            <p className='user_name'>{name}</p>
            <p className='user_staus'>{statu}</p>
            <p></p>
          </div>
        </div>
    </div>
  )
}

export default ReviewsCard