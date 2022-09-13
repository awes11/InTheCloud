import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,SidebarLink} from './SidebarElements';
// import { SideBtnWrap, SidebarRoute } from './SidebarElements';

const SidebarWallet = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                
                <SidebarLink to="/" onClick={toggle} >
                    Home
                </SidebarLink>
                

            </SidebarMenu>
            {/* <SideBtnWrap>
                <SidebarRoute to='/signin'>Connect Wallet</SidebarRoute>
            </SideBtnWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
    
  )
}

export default SidebarWallet