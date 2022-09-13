import React , {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/cloudlogo.webp'

import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
// import{NavBtn, NavBtnLink} from './NavbarElements'

const NavbarWallet = ({toggle}) => {

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
                <NavLogo to='/' onClick={toggleHome} >
                    
                      
                    CL<img src={logo} alt="logo" width="50px" />UD
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon >
                <NavMenu>
                    <NavItem >
                        <NavLinks to="/" >Home</NavLinks>
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

export default NavbarWallet;