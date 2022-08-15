import React , {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/cloudlogo.png'

import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
// import{NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 580){
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
                        smooth={true} duration={1000} spy={true} exact='true' offset={-60} 
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="roadmap"
                        smooth={true} duration={1000} spy={true} exact='true' offset={-60} 
                        >Roadmap</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="team"
                        smooth={true} duration={1000} spy={true} exact='true' offset={0} 
                        >FAQ</NavLinks>
                    </NavItem>
                    <NavItem>
                        
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