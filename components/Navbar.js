import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/images/logo.png'

export default function Navbar () {
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
      <div>
        <div>
          <ul>
            {NavData.map(list => (
              <li>
                <Link href='/'>
                  <a aria-current='page'>{list.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={Logo} alt="logo"/>
        </div>

        <div>
          <div>
            <Link href='/'>
              <a aria-current='page'>login</a>
            </Link>
          </div>
          <ul>
            <li>
              <Link href='/'>
                <a aria-current='page'>login</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a aria-current='page'>login</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
