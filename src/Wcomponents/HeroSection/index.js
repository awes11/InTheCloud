import React from 'react'

import bg6 from '../../images/HeroImage/shootingStar2.png'
import bg8 from '../../images/HeroImage/shootingStar.png'

import cover from '../../images/HeroCoverBG.webp'

import OSLogo from '../../images/OpenseaIconBlack.webp';
import TLogo from '../../images/TwitterIconBlack.webp';
import DLogo from '../../images/DiscordIconBlack.webp';

import '../HeroSection/Herocss.css'

import { HeroContainer, HeroBg, ImgBg,  ImgBg6 ,  ImgBg8} from './HeroElements'

import { useState } from 'react'


import {useEffect} from 'react'
import { db } from '../../firebase-config'
import {collection, onSnapshot, query, where} from 'firebase/firestore'


const HeroSectionWallet = () => {

  const [inputData, setInputData] = useState(null);
  const [inputDataFinal, setInputDataFinal] = useState(false);

  function getInputData(val)
  {
    setInputData(val.target.value)
    setInputDataFinal(false)
   
  }
  
  let inputDataUpper = inputData;

  if (inputData !== null) {
    inputDataUpper = inputDataUpper.toUpperCase();
    }
  

  const [message, setMessage] = useState([]);

  useEffect(()=> {
    const getData =() => {
      const colRef = collection(db, 'WalletAddress')

      const q= query(colRef, where('EthAddress', '==', inputDataUpper))

      onSnapshot(q, (snapshot) => {
        let address = []
        setMessage(snapshot.docs.forEach((doc) => {
          address.push({...doc.data(), id:doc.id})

        }))
        setMessage(address)
        
        
      })
    }
   getData();
  }, [inputDataUpper]) 


  return (
    <HeroContainer>     
        <HeroBg>       

            <ImgBg src={cover} type='image/jpg' />     
           

            <ImgBg8 src={bg8} type='image/png' />
            <ImgBg6 src={bg6} type='image/png'/>
            
        </HeroBg>

          <div className='fieldtext'>Enter Wallet Address here</div>
          <input type="text" name="wallet Address" className='field' onChange={getInputData}> 
            
          </input>
          <button className='fieldButton' onClick={()=>setInputDataFinal(true)}><div>Check</div></button>

          <div className='Word2'>
            <p >Check for Whitelist</p>
           
            <>
             
            { inputDataFinal?
            <div className="description2">
              {message.length > 0 ? 
              (
              <>Congratulations </> 
              )  
              : <div >Sorry,</div>}
              {message.length > 0 ? 
              (
              message.map((wallet) => <div   key={wallet.key} > {wallet.Name} </div>) 
              )  
              : <div></div>}
              {message.length > 0 ? 
              (
              < >Your Wallet Address Below is on The Whitelist</> 
              )  
              : null}
              {message.length > 0 ? (
              message.map((wallet) => <div  key={wallet.key} > {wallet.EthAddress} </div>) 
              
            ) : <div >This Wallet Address is Not on The Whitelist</div>}
              
           </div>
           

            :null
          }     
             
            </>
            </div> 
        


         <div className='OutputMessage'>

  

        </div> 
        
        
        {/* for Social icons */}
        <div className="SocialIconWrap2">

        <div className="SocialIcon2">
        <a href="https://opensea.io/collection/inthecloudsbypsycho" target="_blank" aria-label="OpenSea" rel="noreferrer" >
          <img src={OSLogo} alt="openseaLogo" width="30px" />
          </a>
        </div>

        <div className="SocialIcon2">
        <a href="//www.twitter.com/WGMIPsycho" target="_blank" aria-label="Twitter" rel="noreferrer" >
            <img src={TLogo} alt="TwitterLogo" width="30px" />
        </a>
        </div>

        <div className="SocialIcon2">
        <a href="//www.discord.com/invite/YZwQXbHksD" target="_blank" aria-label="Discord"  rel="noreferrer">
              <img src={DLogo} alt="DiscordLogo" width="30px" />
        </a>
        </div>
      
      </div>
    </HeroContainer>
  )
}

export default HeroSectionWallet