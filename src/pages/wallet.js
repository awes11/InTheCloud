import React, {useState} from 'react'

import NavbarWallet from '../Wcomponents/Navbar';
import SidebarWallet from '../Wcomponents/Sidebar';
import HeroSectionWallet from '../Wcomponents/HeroSection';


const CheckWallet = () => {
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

export default CheckWallet