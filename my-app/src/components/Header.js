import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-around'>
        <div>Home</div>
        <div className='flex items-center gap-4'>
            <span>performance</span>
            <span>Features</span>
        </div>
    </div>
  )
}

export default Header