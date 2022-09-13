import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,SidebarLink, SidebarLinkR} from './SidebarElements';
// import { SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                
                <SidebarLink to="about" onClick={toggle} smooth={true} duration={600} spy={true} exact='true' offset={-60}>
                    About
                </SidebarLink>
                <SidebarLink to="roadmap" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-60}>
                    Roadmap
                </SidebarLink>
                <SidebarLink to="team" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-60}>
                    FAQ
                </SidebarLink>
                <SidebarLinkR to="/wallet"
                        smooth={true} duration={1000} spy={true} exact='true' offset={-58} 
                        >Check WhiteList</SidebarLinkR>
                    

            </SidebarMenu>
            {/* <SideBtnWrap>
                <SidebarRoute to='/signin'>Connect Wallet</SidebarRoute>
            </SideBtnWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
    
  )
}

export default Sidebar