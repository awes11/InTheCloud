import React , {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/cloudlogo.webp'

import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinkR} from './NavbarElements'
// import{NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
    }, [])

    

    const toggleHome =() => {
        scroll.scrollToTop();
    }

  

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    
                      
                    CL<img src={logo} alt="logo" width="50px" />UD
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon >
                <NavMenu>
                    <NavItem >
                        <NavLinks to="about" 
                        smooth={true} duration={1000} spy={true} exact='true' offset={-58} 
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="roadmap"
                        smooth={true} duration={1000} spy={true} exact='true' offset={-58} 
                        >Roadmap</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="team"
                        smooth={true} duration={1000} spy={true} exact='true' offset={-58} 
                        >FAQ</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinkR to="/wallet"
                        smooth={true} duration={1000} spy={true} exact='true' offset={-58} 
                        >Check WhiteList</NavLinkR>
                    </NavItem>
                    
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn> */}
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;