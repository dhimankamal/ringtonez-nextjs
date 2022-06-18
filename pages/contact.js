import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import ContactImage from '../assets/contactImage.png'

export default function Contact () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Sending', name, email, message)

    let data = {
      name,
      email,
      message
    }
    console.log('data', data)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

  return (
    <>
      <Layout title='Contact US - Ringtonez'>
        <div>
          <PageHeader title='Contact US' />
          <div className='flex space-x-2 justify-between mt-10 md:m-20 flex-col space-y-10 md:flex-row md:space-y-0 p-10'>
            <div className='w-full'>
              <Image src={ContactImage} width='534' height='401' alt='image' />
            </div>
            <div className='w-full'>
              <form  className='grid space-y-6 w-full'>
                <span className='text-3xl font-extrabold uppercase text-tonez-white'>
                  Get In Touch
                </span>
                <input
                  onChange={e => {
                    setName(e.target.value)
                  }}
                  className='rounded-2xl h-16 px-10'
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={name}
                />
                <input
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                  className='rounded-2xl h-16 px-10'
                  type='emial'
                  placeholder='Email'
                  value={email}
                />
                <textarea
                  onChange={e => {
                    setMessage(e.target.value)
                  }}
                  value={message}
                  className='rounded-2xl px-10 py-6'
                  placeholder='Message'
                  name='email'
                  id=''
                  rows='4'
                ></textarea>
                <button
                  type='submit'
                  onClick={e => {
                    handleSubmit(e)
                  }}
                  className='bg-tonez-orange rounded-2xl h-16 px-10 text-xl font-bold text-white'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
