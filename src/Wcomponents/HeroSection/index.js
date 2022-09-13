import React from 'react'
import bg1 from '../../images/HeroImage/bgcloud0.webp'
import bg2 from '../../images/HeroImage/bgcloud1.webp'
import bg3 from '../../images/HeroImage/bgcloud2.webp'
import bg4 from '../../images/HeroImage/bgcloud3.webp'
import bg5 from '../../images/HeroImage/bgcloud4.webp'
import bg7 from '../../images/HeroImage/bgcloud5.webp'
import bg6 from '../../images/HeroImage/shootingStar2.png'
import bg8 from '../../images/HeroImage/shootingStar.png'

import OSLogo from '../../images/OpenseaIcon.webp';
import TLogo from '../../images/TwitterIcon.webp';
import DLogo from '../../images/DiscordIcon.webp';

import '../HeroSection/Herocss.css'

import { HeroContainer, HeroBg, ImgBg, ImgBg2, ImgBg3, ImgBg4,ImgBg5, ImgBg6 , ImgBg7, ImgBg8} from './HeroElements'

import { useState } from 'react'


// for firebase
//import {useEffect} from 'react'
//import { db } from '../../firebase-config'
//import {collection, getDocs} from 'firebase/firestore'

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



  // //for firebase using first technique
  // const [walletAddress , setWalletAddress] =useState([]);

  //   useEffect(() => {
  //     const collectionRef = collection(db, "WalletAddress");
  //       const getWalletAddress = async () => {
  //           const data = await getDocs(collectionRef);
  //          setWalletAddress(data.docs.map((doc) => ({...doc.data(), id: doc.id }) ))
           
  //       };

  //       getWalletAddress()

  //   }, [])


  return (
    <HeroContainer>     
        <HeroBg>            
            <ImgBg  src={bg1} type='image/png' />

            <ImgBg8 src={bg8} type='image/png' />
            <ImgBg6 src={bg6} type='image/png'/>
            <ImgBg7 src={bg7} type='image/png' />

            <ImgBg2 src={bg2} type='image/png'/>
            <ImgBg3 src={bg3} type='image/png'/>

            
            <ImgBg5 src={bg5} type='image/png' />
            <ImgBg4 src={bg4} type='image/png' />
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

          
          


          
          {/*  {walletAddress.map((Address) => {

              
                return (
       
                <div>
                   
                <h1>Name: {Address.Name}</h1>
                <h1>Address: {Address.EthAddress}</h1> 
                </div>
            
                )}
            )}     
            */}

        </div> 
        
        
        {/* for Social icons */}
        <div className="SocialIconWrap2">

        <div className="SocialIcon2">
        <a href="//www.opensea.io" target="_blank" aria-label="OpenSea" rel="noreferrer" >
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