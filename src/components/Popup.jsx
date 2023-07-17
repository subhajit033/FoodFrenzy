import React from 'react'

const Popup = ({isPopupVisible}) => {
  return (
    <div className={`fixed ${isPopupVisible? "bottom-8": "-bottom-80"} right-8 bg-orange-500 px-4 py-3 text-white rounded-md`}>
        <p>Item added to cart</p>
    </div>
  )
}

export default Popup