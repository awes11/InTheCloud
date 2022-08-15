import React, {useState} from 'react';
import Discord from '../components/Discord';
import Footer from '../components/Footer';
import FrontSection from '../components/FrontSection';

// import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo} from '../components/InfoSection/data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Team from '../components/Team';



const Home = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen( !isOpen);
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <FrontSection/>
        {/* <HeroSection/>  */}
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Discord/>
        <Team />
                
        
        <Footer />
        
        

        
    </>
  );
}

export default Home;