import React from 'react'

interface Props {
  onClick?: () => void
}

const Button = (props: Props) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" 
        onClick={props.onClick}>
        Launch Token
      </button>
    </div>
  )
}

export default Button