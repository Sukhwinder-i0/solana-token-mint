'use client'

import React, { useState } from 'react'
import Button from './Button'
import InputBox from './InputBox';

const TokenLaunchpad = () => {

  const [formData, setFormData] = useState({
    tokenName: '',
    tokenSymbol: '',
    tokenSupply: '',
    tokenPrice: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  

  return (
    <div className='max-w-md justify-center items-center rounded-md flex flex-col p-10 bg-[#0f0f0f] text-white'>  
      <h1 className='text-3xl text-[#6cbcf1] pb-8'>Solana Token Launchpad</h1>
      <p className='pb-8'>Welcome to the Solana Token Launchpad. Here you can launch your own token.</p>

      <InputBox
        name="tokenName"
        placeholder="Enter token name"
        className="mb-4"
        onChange={handleInputChange}
        value={formData.tokenName}
        type="text"
      />

      <InputBox
        name="tokenSymbol"
        placeholder="Enter token symbol"
        className="mb-4"
        onChange={handleInputChange}
        value={formData.tokenSymbol}
        type="text"
      />

      <InputBox
        name="tokenSupply"
        placeholder="Enter token supply"
        className="mb-4"
        onChange={handleInputChange}
        value={formData.tokenSupply}
        type="number"
      />

      <InputBox 
        name="tokenPrice"
        placeholder="Enter token price"
        className="mb-4"
        onChange={handleInputChange}
        value={formData.tokenPrice}
        type="number"
      />

      
      <Button
        onClick={() => console.log('Token launched')}
      />
    </div>
  )
}

export default TokenLaunchpad