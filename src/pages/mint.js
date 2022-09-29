import React, {useState} from 'react'

import NavbarWallet from '../Wcomponents/Navbar';
import SidebarWallet from '../Wcomponents/Sidebar';
import HeroSectionWallet from '../Mcomponents/HeroSection';



const MintingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen( !isOpen);
    };

  return (
    <>
   
        <SidebarWallet isOpen={isOpen} toggle={toggle}/>
        <NavbarWallet toggle={toggle} />
        <HeroSectionWallet/> 
        
    </>
  )
}

export default MintingPage