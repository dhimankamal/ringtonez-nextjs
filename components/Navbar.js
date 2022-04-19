import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Logo from '../assets/images/logo.png'

export default function Navbar () {

  const router = useRouter();
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
            {NavData.map((list,key) => (
              <li key={key}>
                <Link href={list.href} >
                  <a  aria-current='page' className={((router.pathname == list.href) ? "text-tonez-orange border-b-2 border-tonez-orange " : "")+ "hover:text-tonez-orange transition duration-500" }  >{list.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div >
          <Image src={Logo} alt="logo"/>
        </div>

        <div className='flex-1'>
          <ul className='flex space-x-4 justify-end items-center'>
            <li>
              <Link href='/auth/signup'>
                <a className='uppercase' aria-current='page'>sign up</a>
              </Link>
            </li>
            <li className='w-[130px] h-[50px] rounded-full bg-tonez-orange flex items-center justify-center'>
              <Link href='/auth/login'>
                <a aria-current='page'>login</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
