import Head from 'next/head'
import Image from 'next/image'
import { useBuzz } from '../Connector/buzz'
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'
import Hero from '../buzz_component/Hero'
import Navbar from '../buzz_component/Navbar'
const Home = () => {
  const {
    initialized,
    transactionPending,
    name,
    age,
    gender,
    profileUrl,
    nameHandler,
    ageHandler,
    genderHandler,
    profileUrlHandler,
    initializeUser,
    addFriendfun,
    allUsers
  } = useBuzz()

  return(
    <>
  
    <Hero/>
    </>
  )
}

export default Home
