import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-around'>
        <Link href={'/'}>Home</Link>
        <div className='flex items-center gap-4'>
            <Link href={'/performance'}>performance</Link>
            <Link href={'/features'}>Features</Link>
        </div>
    </div>
  )
}

export default Header