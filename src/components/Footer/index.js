

import React from 'react'
import { FooterContainer,
FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinkS, 
SocialMedia,SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './footerElements'

import { animateScroll as scroll } from 'react-scroll';
import {FaTwitter , FaDiscord} from 'react-icons/fa';
import logo from '../../images/cloudlogo.webp'
import OSLogo from '../../images/OpenseaIconBlack.webp';


const Footer = () => {

    const toggleHome =() => {
        scroll.scrollToTop();
    }

  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLinkS 
                            to="about" smooth={true} duration={600} spy={true} exact='true' offset={-60}
                            > Project Info </FooterLinkS>
                            <FooterLinkS 
                            to="roadmap"
                            smooth={true} duration={500} spy={true} exact='true' offset={-60} > Roadmap </FooterLinkS>
                            <FooterLinkS 
                            to="team"
                            smooth={true} duration={500} spy={true} exact='true' offset={-60}> FAQ</FooterLinkS>
                            
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink href="//www.twitter.com/WGMIPsycho" target="_blank" aria-label="Twitter"> Twitter </FooterLink>
                            <FooterLink href="//www.discord.com/invite/YZwQXbHksD" target="_blank" aria-label="Discord" > Discord </FooterLink>
                            
                           
                    </FooterLinkItems>

                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Team social</FooterLinkTitle>
                            <FooterLink href="//www.twitter.com/WGMIPsycho" target="_blank" aria-label="Twitter"> @WGMIPsycho</FooterLink>
                            <FooterLink href="//www.twitter.com/awes_eth" target="_blank" aria-label="Twitter"> @awes_eth</FooterLink>
                            
                    </FooterLinkItems>

                    

                </FooterLinksWrapper>


            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}><img src={logo} alt="logo" width="50px" /></SocialLogo>
                    
                    <WebsiteRights>
                        In The Clouds © {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.twitter.com/WGMIPsycho" target="_blank" aria-label="Twitter" >
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.discord.com/invite/YZwQXbHksD" target="_blank" aria-label="Discord" >
                            <FaDiscord/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.opensea.io" target="_blank" aria-label="Discord" >
                        <img src={OSLogo} alt="openseaLogo" width="25px" />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

            
        </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default Footer