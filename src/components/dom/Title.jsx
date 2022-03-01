import React from 'react'
import Logo from './Logo'

export default function Title() {
  return (
    <div className='flex flex-col items-center justify-center w-full mt-8 sm:col-span-2'>
      <Logo className='max-w-full p-4' />
      <h3 className='px-4 mt-1 text-xs font-bold tracking-widest uppercase text-text-transparent font-space md:text-sm lg:text-md'>
        a covid safe interactive art installation
      </h3>
    </div>
  )
}
