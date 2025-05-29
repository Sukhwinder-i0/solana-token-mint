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
    // Here you would typically handle the form submission,
    // such as sending the data to a backend or blockchain.
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Solana Token Launchpad</h1>
      <p>Welcome to the Solana Token Launchpad. Here you can create and manage your token launches.</p>

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