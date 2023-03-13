import {WalletAdapterNetwork} from '@solana/wallet-adapter-base'
import {ConnectionProvider,WalletProvider} from '@solana/wallet-adapter-react'
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui'
import {GlowWalletAdapter,PhantomWalletAdapter,SlopeWalletAdapter} from '@solana/wallet-adapter-wallets'
import {clusterApiUrl} from '@solana/web3.js'
import {useMemo} from 'react'

export const WalletConnectProvider = ({children}) =>{
    const network = WalletAdapterNetwork.Devnet

    const endpoint = useMemo(()=>{
        if(network ===WalletAdapterNetwork.Devnet){
            return 'https://withered-blissful-sunset.solana-devnet.discover.quiknode.pro/0d1ddcc25bc030f8666347b3457ba3932c5c8683/'
        }

        return clusterApiUrl(network)
    },[network])

    const wallets = useMemo(()=>[new PhantomWalletAdapter()],[network])

    return(
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets = {wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}