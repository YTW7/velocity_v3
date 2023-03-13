import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { Children, useMemo } from "react";

const WalletConnectionProvider =({children})=>{
    const endpoint= useMemo(()=>"https://withered-blissful-sunset.solana-devnet.discover.quiknode.pro/0d1ddcc25bc030f8666347b3457ba3932c5c8683/",[])

    const wallets = useMemo(()=>[new PhantomWalletAdapter()],[])

    return(
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
                </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletConnectionProvider