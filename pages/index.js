import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MyNav from './components/MyNav'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import BlogPreview from './components/BlogPreview'
import CTASection from './components/CTASection'
const inter = Inter({ subsets: ['latin'] })
// import { createInstance } from '@adobe/alloy'
// const alloy = createInstance({ name: 'alloy' })
// alloy('config', {
//   datastreamId: '47d03159-2436-43b5-9d1a-1f851cea1168',
//   orgId: '18F332CC5B4DB4150A495DF0@AdobeOrg',
// })
// alloy('sendEvent', {
//   data: { email: 'chaunceyp@tapcxm.com' },
//   documentUnloading: false,
//   edgeConfigOverrides: { datastreamId: '0dada9f4-fa94-4c9c-8aaf-fdbac6c56287' },
//   renderDecisions: true,
//   type: 'commerce.purchases',
//   xdm: adobeDataLayer.getState(reference),
// })

export default function Home() {
  return (
    <>
      <MyNav />
      <HeroSection />
      <Features />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  )
}
