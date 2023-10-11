import React, { useState } from 'react';
import axios from 'axios';

const EmailCapture = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async () => {
    try {
      const response = await axios.post('https://api.cc.email/v3/account/emails', {
        email,
      });

      if (response.status === 201) {
        console.log('New contact record created successfully');
      }
    } catch (error) {
      console.error('Error creating a new contact record:', error);
    }
  };

  return (
    <div className='w-full'>
      <form className='flex
      flex-col items-center
      w-full' onSubmit={handleEmailSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        className='bg-slate-50
        p-4 rounded-lg mt-7 w-2/3 max-sm:w-5/6'
      />
      <button type='submit'
      className='mt-5 bg-black px-4 py-2
      text-slate-50'>Submit</button>
      </form>
    </div>
  );
};

export default EmailCapture;
