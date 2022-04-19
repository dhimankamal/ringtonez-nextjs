import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Footer () {
  const router = useRouter();
  let NavData = [
   
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
    <div className='bg-tonez-white uppercase mt-4 w-[200%] md:w-auto '>
      <div className='container mx-auto px-12 py-12 grid md:grid-cols-4 text-tonez-blue space-y-10 md:space-y-0'>
        <div className='text-center md:text-left'>
          <span className='text-6xl opacity-30  font-extrabold '>About</span>
          <p className='font-light text-xl md:text-base md:text-base normal-case mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
        </div>
        <div className='text-center'>
          <span className='text-6xl opacity-30 text-tonez-blue font-extrabold'>
            Links
          </span>
          <ul className='space-y-2 mt-4 font-light text-xl md:text-base'>
            <li>
              <Link href='/'>
                <a className='hover:text-tonez-orange transition duration-500' aria-current='page'>links</a>
              </Link>
            </li>
            <li>
           
              <Link href='/'>
                <a className='hover:text-tonez-orange transition duration-500' aria-current='page'>links</a>
              </Link>
            </li>
            <li>
         
              <Link href='/'>
                <a className='hover:text-tonez-orange transition duration-500' aria-current='page'>links</a>
              </Link>
            </li>
            <li>
          
              <Link href='/'>
                <a className='hover:text-tonez-orange transition duration-500' aria-current='page'>links</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='text-center'>
          <span className='text-6xl opacity-30 text-tonez-blue font-extrabold'>
            Links
          </span>
          <ul className='space-y-2 mt-4 font-light text-xl md:text-base'>
            <li>
              <Link href='/'>
                <a className='hover:text-tonez-orange transition duration-500' aria-current='page'>links</a>
              </Link>
            </li>
            <li>
           
              <Link href='/'>
                <a className='hover:text-tonez-orange transition duration-500' aria-current='page'>links</a>
              </Link>
            </li>
            <li>
         
              <Link href='/'>
                <a className='hover:text-tonez-orange transition duration-500' aria-current='page'>links</a>
              </Link>
            </li>
            <li>
          
              <Link href='/'>
                <a className='hover:text-tonez-orange transition duration-500' aria-current='page'>links</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='text-center'>
          <span className='text-6xl opacity-30 text-tonez-blue font-extrabold'>
            Links
          </span>
          <ul className='space-y-2 mt-4 font-light text-xl md:text-base'>
            {NavData.map((list,key) => (
              <li key={key}>
                <Link href={list.href} >
                  <a  aria-current='page' className={((router.pathname == list.href) ? "text-tonez-orange border-b-2 border-tonez-orange " : "")+ "hover:text-tonez-orange transition duration-500" }  >{list.name}</a>
                </Link>
              </li>
            ))}
          
          </ul>
        </div>
      </div>
    </div>
  )
}
