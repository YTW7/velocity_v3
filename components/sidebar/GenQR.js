import React from 'react'

const GenQR = ({ setModalOpen, userAddress }) => {

    const onProfileOpen = () => {
        setModalOpen(true)
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