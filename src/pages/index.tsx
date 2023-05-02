import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Reddit 2.0 Clone</title>
      </Head>

      <Header/>
    </div>
  )
}
