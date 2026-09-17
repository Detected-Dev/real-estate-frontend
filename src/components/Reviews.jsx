import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ReviewsCard from '../components/ReviewsCard'
const Reviews = () => {
  return (
    <div className='reviews section container'>
      <SectionTitle title="WHAT OUR CUSTOMERS SAY" subtitle="Real experiences from people who found their home with us."/>
      <div className="reviews_content">
          <ReviewsCard 
            comment="The whole process felt effortless. Every property listing matched what we actually saw in person."
            img="image-2"
            name="Youssef Bennani"
            statu="Bought an apartment"
          />
          <ReviewsCard 
            comment="Support team answered every question fast, even on weekends. Made a stressful move much easier."
            img="image-3"
            name="Sara Lahlou"
            statu="Rented a villa"
            />
          <ReviewsCard 
            comment="Search filters saved me hours. Found three great options in Casablanca within a day."
            img="image-4"
            name="Karim El Amrani"
            statu="Bought a house"
            />
      </div>
    </div>
  )
}

export default Reviews