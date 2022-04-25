import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from '../assets/images/logo.png'

export default function Navbar () {
  const router = useRouter()
  const [mobileMenu, setmobileMenu] = useState(false)

  const showMenu = () => {
    console.log('clicked')
    setmobileMenu((mobileMenu = !mobileMenu))
  }

  let NavData = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Category',
      href: '/category'
    },
    {
      name: 'New',
      href: '/newuploads'
    },
    {
      name: 'About Us',
      href: '/about'
    },
    {
      name: 'Contact Us',
      href: '/contact'
    }
  ]
  return (
    <section>
      <div className='flex justify-between my-12 text-tonez-white items-center font-light text-base uppercase'>
        <div className='flex-1 hidden lg:block'>
          <ul className='flex space-x-4 '>
            {NavData.map((list, key) => (
              <li key={key}>
                <Link href={list.href}>
                  <a
                    aria-current='page'
                    className={
                      (router.pathname == list.href
                        ? 'text-tonez-orange border-b-2 border-tonez-orange '
                        : '') +
                      'hover:text-tonez-orange transition duration-500'
                    }
                  >
                    {list.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={Logo} alt='logo' />
        </div>

        <div className='lg:flex-1'>
          <ul className='hidden lg:block lg:flex space-x-4 justify-end items-center'>
            <li>
              <Link href='/auth/signup'>
                <a className='uppercase' aria-current='page'>
                  sign up
                </a>
              </Link>
            </li>
            <li className='w-[130px] h-[50px] rounded-full bg-tonez-orange flex items-center justify-center'>
              <Link href='/auth/login'>
                <a aria-current='page'>login</a>
              </Link>
            </li>
          </ul>
          <div className='space-y-2 lg:hidden block' onClick={showMenu}>
            <span className='block w-8 h-0.5 bg-gray-600'></span>
            <span className='block w-8 h-0.5 bg-gray-600'></span>
            <span className='block w-5 h-0.5 bg-gray-600'></span>
          </div>
        </div>
      </div>
      {mobileMenu ? (
        <div className='fixed top-0 left-0 w-full h-[100vh]  bg-tonez-white/[0.8] font-semibold backdrop-blur z-50'>
          <div className='w-full mt-10 px-10 flex justify-end' onClick={showMenu}>
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>

          <ul className='flex flex-col space-y-4 text-2xl items-center justify-center h-full' onClick={showMenu}>
            {NavData.map((list, key) => (
              <li key={key}>
                <Link href={list.href} >
                  <a
                    aria-current='page'
                    className={
                      (router.pathname == list.href
                        ? 'text-tonez-orange border-b-2 border-tonez-orange '
                        : '') +
                      'hover:text-tonez-orange transition duration-500'
                    }
                  >
                    {list.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
    </section>
  )
}
