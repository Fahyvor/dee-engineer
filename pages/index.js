import React from 'react'
import '../styles/globals.css'
import EmailCapture from '@/components/EmailCapture'

const index = () => {
  return (
    <div className='homepage-body h-screen
    text-center pt-6 flex flex-col gap-6'>

    <div className="App">
      <h1>Subscribe to Our Newsletter</h1>
      <EmailCapture />
    </div>

    </div>
  )
}

export default index;