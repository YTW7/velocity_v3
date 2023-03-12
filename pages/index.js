import { useState, useEffect } from 'react'
import Action from '../components/sidebar/Action'
import NavMenu from '../components/sidebar/NavMenu'
import Profile from '../components/sidebar/Profile'
import GenQR from '../components/sidebar/GenQR'
import SearchBar from '../components/home/SearchBar'
import NewTransactionModal from '../components/transaction/NewTransactionModal'
import TransactionsList from '../components/transaction/TransactionsList'
import { useWallet } from '@solana/wallet-adapter-react'
import TransactionQRModal from '../components/transaction/TransactionQRModal'
// import { transactions } from '../data/transactions'
import { getAvatarUrl } from "../functions/getAvatarUrl"
import { useCashApp } from '../hooks/cashapp'
import Payments from '../components/header/Payments'
import Navbar from '../components/header/Navbar'

const Home = () => {
    // const { connected, publicKey } = useWallet()
    
    
    const [transactionQRModalOpen, setTransactionQRModalOpen] = useState(false)
    const [qrCode,setQrCode]=useState(false)

    const {connected, publicKey, avatar, userAddress, transactions, newTransactionModalOpen, setNewTransactionModalOpen} =useCashApp()
    


    return (
        <div className="flex min-h-screen ">
            <header className="flex w-[250px] flex-col bg-[#9945ff] p-12">
                
                <div className='my-10px'>
                    <div className="flex cursor-pointer flex-col items-center space-y-3">
                       <div className="h-16 w-16 rounded-lg border-2 border-white">
                           <img className="h-full w-full rounded-lg object-cover" src="logo.png" />
                       </div>
                   </div>
                </div>
                
                <TransactionQRModal modalOpen={transactionQRModalOpen} setModalOpen={setTransactionQRModalOpen} userAddress={userAddress} myKey={publicKey} setQrCode={setQrCode} />

                <NavMenu connected={connected} publicKey={publicKey} />
                {/* <Profile setModalOpen={setTransactionQRModalOpen} avatar={avatar} userAddress={userAddress} />
                <br/> */}
               
                <Action setModalOpen={setNewTransactionModalOpen} />
                <NewTransactionModal modalOpen={newTransactionModalOpen} setModalOpen={setNewTransactionModalOpen} />
                <GenQR setModalOpen={setTransactionQRModalOpen} userAddress={userAddress}/>
                
            </header>

            <main className="flex flex-1 flex-col bg-[url('/bg.png')] ">
            <Navbar/>
            <Payments/>
            </main>
            {/* <main className="flex flex-1 flex-col">
                <SearchBar />

                <TransactionsList connected={connected} transactions={transactions} />
            </main> */}
        </div>
    )
}

export default Home
