import React from 'react'
import Head from 'next/head'

import Logo from '../assets/logo.svg'

import { Container } from '../styles/pages/Home'


const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Next.JS</title>
      </Head>

      <Logo />
    </Container>
  )
}

export default Home
