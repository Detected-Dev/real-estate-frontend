import React from 'react'
import SectionTitle from '../components/SectionTitle'

const WhyChooseUs = () => {
  return (
    <div className='section container why_choose_us'>
        <SectionTitle title="WHY CHOOSE US" subtitle="We make finding your perfect property simple, secure, and stress-free."/>
        <div className='content'>
            <div>
                <img src="/WhyChooseUs.svg" alt="WHY CHOOSE US"  width={650}/>
            </div>
            <div className='choose_us_options'>
                <div>
                    <h3>Trusted Properties</h3>
                    <p>Browse verified and carefully selected properties from trusted sources</p>
                </div>
                <div>
                    <h3>Simple & Fast</h3>
                    <p>Find what you're looking for quickly with our easy search and filtering options</p>
                </div>
                <div>
                    <h3>Expert Support</h3>
                    <p>Our team is here to guide you throughout your property journey</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs