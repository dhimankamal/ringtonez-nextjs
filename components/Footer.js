import React from 'react'
// import Link from 'next/link'
// import { useRouter } from 'next/router'

export default function Footer () {
  // const router = useRouter()
  // let NavData = [
  //   {
  //     name: 'Posts',
  //     href: '/posts'
  //   },
  //   {
  //     name: 'Ringtone',
  //     href: '/ringtone'
  //   },
  //   {
  //     name: 'About Us',
  //     href: '/about'
  //   },
  //   {
  //     name: 'Contact Us',
  //     href: '/contact'
  //   }
  // ]
  return (
    <footer className='pt-2 text-white text-center'>
      <div className='text-center text-white md:w-auto md:container md:mx-auto md:px-12 px-4'>
        <div className='flex justify-center mb-4 space-x-6'>
          <a
            href='https://youtube.com/c/Ringtoneztv'
            className=' text-tonez-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-youtube'
              viewBox='0 0 16 16'
            >
         
              <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />{' '}
            </svg>
          </a>

          <a
            href='mailto:tonezring@gmail.com'
            className='text-tonez-white'
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='google'
              className='svg-inline--fa fa-google w-3.5'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 488 512'
            >
              <path
                fill='currentColor'
                d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
              />
            </svg>
          </a>
          <a
            href='https://instagram.com/tonezring?igshid=YmMyMTA2M2Y='
            className='text-tonez-white'
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='instagram'
              className='svg-inline--fa fa-instagram w-3.5'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='currentColor'
                d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
              />
            </svg>
          </a>
        </div>
      </div>
      <div
        className='text-center text-tonex-white p-4'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <a className='text-tonez-white' href='https://www.ringtonez.in/'>
          ringtonez.in
        </a>{' '}
        &nbsp; © 2021 Copyright
      </div>
    </footer>
  )
}
