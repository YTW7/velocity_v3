import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "../buzz_component/Navbar";
import "../styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletConnectProvider } from "../buzz_component/WalletConnectProvider";
const WalletConnectionProvider=dynamic(()=> import('../context/WalletConnectionProvider'),{
    ssr:false,
} )

function MyApp({ Component, pageProps }) {
  return (
    <>
     
      <Head>
                <link rel="shortcut icon" href="/logo.png" type="image"/>
                <title>Velocity | All-in-One Solana Dapp</title>
            </Head>
            
            <WalletConnectionProvider>
            <Navbar/>
            <Component {...pageProps} />
            </WalletConnectionProvider>
    </>
  );
}

export default MyApp;
