import React  from 'react'
import styled from 'styled-components'
import { Button } from '../../components/ButtonElement.js'




const DiscordContainer = styled.div`

    color: #fff;
    /* background: #c5d7e8; */
    background-image: linear-gradient(#DBE2E9, #bfcddb);

    
   
`

const DiscordWrapper = styled.div`
    display: flex;
    z-index:2;
    height: 80px;
    width: 80%;
    bottom: 20px;
    margin-right:auto;
    margin-left:auto;
    
    justify-content: center;
    align-items:center;


    border-radius: 2px;

    @media screen and (max-width: 780px) {

        grid-template-columns: 1fr, 1fr;
        display: grid;
        height:110px;
        
    }
    

   

`
const BtnWrapper = styled.div`
    width:300px;
    margin-top:5px;
    display:flex;
    
    padding-bottom: 20px;
    text-decoration:none;
   
    flex-direction:column;
    


`

const Content =styled.div`
    font-size: 24px;
    margin-right: 20px;
    margin-left:20px;
    color: #000;
    font-weight: 600;
    margin-bottom:20px;

    @media screen and (max-width: 780px) {

        margin-bottom:5px;

}
    
`




const Discord = () => {

    

  return (
    
    <DiscordContainer>
        <DiscordWrapper>
            
            
            <Content>
                
                Join us In The Clouds</Content>
            <BtnWrapper>        
                
                
                <Button href="//www.discord.com/invite/YZwQXbHksD" target="_blank" aria-label="Discord" > Discord </Button>
            </BtnWrapper>
        </DiscordWrapper>
    </DiscordContainer>
    
  )
}

export default Discord;