import React from 'react'
import SectionTitle from './SectionTitle'
import HowItWorksCard from './HowItWorksCard'

const HowItWorks = () => {
  return (
    <div className='container section how_it_work'>
        <SectionTitle title="HOW IT WORKS" subtitle="From searching to moving in we make the process simple." />
        <div className='content'>
            <div>
                <img src="/howitworks.svg" alt="HOW IT WORKS" width={650} />
            </div>
            <div className='cardsBox'>
                <HowItWorksCard title="Search" content="Browse properties matching your needs " />
                <HowItWorksCard title="Explore" content="View photos, details, prices, and amenities " />
                <HowItWorksCard title="Contact" content="Connect with the owner or agent and schedule a viewing" />
                <HowItWorksCard title="Move In" content="Complete the process and enjoy your new home" />
            </div>
        </div>
    </div>
  )
}

export default HowItWorks