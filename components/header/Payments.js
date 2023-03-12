import React from 'react'
import SearchBar from '../home/SearchBar'
import TransactionsList from '../transaction/TransactionsList'
import { useCashApp } from '../../hooks/cashapp'

const Payments = () => {

    const {connected, transactions} =useCashApp()
  return (

        
            <div>
                <SearchBar />

                <TransactionsList connected={connected} transactions={transactions} />
                </div>
      

  )
}

export default Payments