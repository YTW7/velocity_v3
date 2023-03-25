import React from 'react'
import { useCashApp } from '../../hooks/cashapp'

const GenQR = ({ setModalOpen, userAddress }) => {

    const onProfileOpen = () => {
        setModalOpen(true)
    }

    const {amount, setAmount, receiver, setReceiver, transactionPurpose, setTransactionPurpose, doTransaction}=useCashApp()

    const onAmountInput = (e) => {
      e.preventDefault()
      const newAmount = e.target.value

      setAmount(newAmount)

      const input = document.querySelector('input#amount')
      input.style.width = newAmount.length + 'ch'
  }
  
  return (
    <div>
      
    <button onClick={onProfileOpen} className="w-full rounded-lg bg-[#7300ff] py-3 hover:bg-opacity-70 my-5">
        <span className="font-medium text-white">Generate QR</span>
    </button>
</div>
  )
}

export default GenQR