import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    /* background: #89A4C3; */
    /* background:#A4ACD8; */
    /* background: #424556; */
    background: ${({scrollNav}) => (scrollNav ? '#1E1E1E' : 'transparent')};
    
    height: 60px; 
    margin-top: -60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    top: 0;
    z-index: 10;
    position:sticky;
    transition: 0.8s all ease;
   

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }

`

export const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1400px;
    
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.1s all ease-in-out;
   

    &:hover{
       font-size: 1.53rem;
       transition: 0.1s all ease-in-out;
    }

`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 30%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
    
`

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style : none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display:none;


    }
`

export const NavItem = styled.li`
    height: 60px;
    
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 400;
    transition: 0.2s all ease-in-out;
    
    &:hover{
       font-size: 1.12rem;
       transition: 0.2s all ease;
    }

    &.active {
        border-bottom:3px solid #A7C7E7;
       
        border-bottom-right-radius:3px ;
        border-bottom-left-radius:3px ;
        
    } 
`

export const NavBtn = styled.nav`
    display:flex ;
    align-items: center;

    @media screen and (max-width: 768px) {
        display:none;
        
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline:none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        
    }
`;