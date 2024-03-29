"use client"

import React from 'react'
import NavigationBar from "@/components/NavigationBar"
import HeaderHome from '@/components/HeaderHome'
import AboutUs from '@/components/AboutUs'
import CampersListing from '@/app/pages/recruitment/components/CampersListing'

function Home() {
  return (
    <>
      <NavigationBar />
      <HeaderHome />
      <AboutUs />
      <CampersListing />
    </>
  )
}

export default Home