import Link from './Link'
import Background from '@/components/dom/Background'
import Time from './Time'

export default function Info() {
  return (
    <div className='absolute bottom-0 flex flex-col items-center justify-center w-full p-4 gap-4 sm:flex-row'>
      <div className='flex flex-col w-full p-4 text-sm text-left uppercase border-2 border-solid sm:w-1/2 font-krona bg-purple-bg border-pink-border h-36'>
        <p className='pb-3 text-blue-accent'>one night only</p>
        <p className='text-text-transparent'>May 7th</p>
        <p className='text-text-transparent'>5:00pm - 6:30pm</p>
        <p className='text-text-transparent'>URBN Center Lobby</p>
      </div>
      <div className='flex flex-col w-full p-4 border-2 border-solid sm:w-1/2 bg-purple-bg border-pink-border h-36'>
        <p className='pb-3 text-sm font-medium tracking-widest uppercase font-space text-text-transparent'>
          Created By:
        </p>
        <div className='flex flex-col justify-start'>
          <Link
            link='https://www.charleswollochdesigns.com/'
            name='Charles Wolloch'
          />
          <Link link='https://jamescliff.com/' name='James Zangari' />
          <Link link='https://themgdesign.com/' name='Melissa Gabriele' />
          <Link link='https://reiddumont.com/' name='Reid Dumont' />
        </div>
      </div>
    </div>
  )
}
