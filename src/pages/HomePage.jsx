import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import HomePropertiesPage from '../components/HomePropertiesPage';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <>
      <Header existNavBar={true} existButton={true}/>
      <Hero/>
      <HowItWorks/>
      <HomePropertiesPage/>
      <WhyChooseUs/>
      <Reviews />
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default HomePage


