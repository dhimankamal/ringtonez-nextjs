import React from 'react'
import Link from 'next/link'

export default function Footer () {
  return (
    <div className='bg-tonez-white uppercase mt-4'>
      <div className='container mx-auto md:px-12 py-12 grid grid-cols-4 text-tonez-blue'>
        <div>
          <span className='text-6xl opacity-30  font-extrabold '>About</span>
          <p className='font-light text-base normal-case mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
        </div>
        <div className='text-center'>
          <span className='text-6xl opacity-30 text-tonez-blue font-extrabold'>
            Links
          </span>
          <ul className='space-y-2 mt-4 font-light text-base'>
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
          <ul className='space-y-2 mt-4 font-light text-base'>
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
          <ul className='space-y-2 mt-4 font-light text-base'>
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
      </div>
    </div>
  )
}
