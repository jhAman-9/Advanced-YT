import React from 'react'
import { IMG_LOGO } from '../utils/constants'

const ChatMessages = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm'>
      <img className='h-8 w-8 p-1' src={IMG_LOGO} alt='img-logo' />
      <span className='font-bold p-1'>{name}</span>
      <span className='text-black p-1'>{message}</span>
    </div>
  )
}

export default ChatMessages