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
