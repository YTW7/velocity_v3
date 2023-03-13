import { useState, useEffect, Link } from 'react'
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
    
    const [paymentsTab, setPaymentsTab] = useState(false);

    const PaymentsTab = () => (
        <>
        <div>
                <SearchBar btn={paymentsTab}/>

                <TransactionsList connected={connected} transactions={transactions} />
                </div>
        </>
      );
      const HomeTab = () => (
        <>
        <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-5">
      <h1 class="sm:text-6xl font-medium text-center title-font text-gray-900 mb-4">Dapp Experience Redefined</h1>
      <h1 class="sm:text-6xl font-medium text-center title-font text-gray-900 mb-4">with <i>Velocity</i></h1>
      <h1 class="sm:text-6xl font-medium text-center title-font text-gray-900 mb-20">Exclusively on Solana</h1>
    </div>
   <a href="/"> <button class="open-btn flex mx-auto mt-5 font-bold text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">See Demo</button>
   </a>
  </div>
</section>
                </div>
        </>
      );

      const Navbar = () => (
        <>
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    {/* <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a> */}
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    
      {/* <a class="mr-5 hover:text-gray-900">Contacts</a> */}
      <button className="mr-5 rounded-lg bg-[#7300ff] py-2 px-3 hover:bg-opacity-70">
                <a href='/myspace'><span className="font-medium text-white">Contacts</span></a>
            </button>
      <button className="mr-5 rounded-lg bg-[#7300ff] py-2 px-3 hover:bg-opacity-70">
                <span className="font-medium text-white">DAOs</span>
            </button>
      {/* <a class="mr-5 hover:text-gray-900">Payments</a> */}
      <button className="mr-5 rounded-lg bg-[#7300ff] py-2 px-3 hover:bg-opacity-70">
                <span onClick={() => setPaymentsTab(!paymentsTab)} className="font-medium text-white">Payments</span>
            </button>
    </nav>
    {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
</header>
        </>
      );

    return (
        <div className="flex ">
            <header className="flex w-[250px] flex-col bg-[#9945ff] p-12 rounded-tl-2xl">
                
                {/* <div className='my-10px'>
                    <div className="flex cursor-pointer flex-col items-center space-y-3">
                       <div className="h-16 w-16 rounded-lg border-2 border-white">
                           <img className="h-full w-full rounded-lg object-cover" src="logo.png" />
                       </div>
                   </div>
                </div> */}
                
                {/* <TransactionQRModal modalOpen={transactionQRModalOpen} setModalOpen={setTransactionQRModalOpen} userAddress={userAddress} myKey={publicKey} setQrCode={setQrCode} /> */}

                <NavMenu connected={connected} publicKey={publicKey} />
                {/* <Profile setModalOpen={setTransactionQRModalOpen} avatar={avatar} userAddress={userAddress} />
                <br/> */}
               
                <Action setModalOpen={setNewTransactionModalOpen} />
                <NewTransactionModal modalOpen={newTransactionModalOpen} setModalOpen={setNewTransactionModalOpen} />
                <GenQR setModalOpen={setTransactionQRModalOpen} userAddress={userAddress}/>
                
            </header>

            <main className="flex flex-1 flex-col bg-[url('/bg.png')] rounded-tr-2xl">
            {Navbar()}
            {paymentsTab ? PaymentsTab() : HomeTab()}
            </main>
            {/* <main className="flex flex-1 flex-col">
                <SearchBar />

                <TransactionsList connected={connected} transactions={transactions} />
            </main> */}
        </div>
    )
}

export default Home
