import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import PropertiesPage from '../components/PropertiesPage';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero/>
      <HowItWorks/>
      <PropertiesPage/>
      <WhyChooseUs/>
      <Reviews />
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default HomePage


