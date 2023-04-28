import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeaturedProduct from './components/FeaturedProduct';

const Home = () => {
  const data={
    name:"Deer Store"
  };
  return (<>
        <HeroSection data={data} />
        <FeaturedProduct />
        <Services />
        <Trusted />
  </>
  )
}



export default Home;