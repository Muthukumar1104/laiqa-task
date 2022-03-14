import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { QualityComponent } from './QualityComponent'
import { SideBar } from './SideBar'

export const Home = () => {
  return (
    <>
      <SideBar />
      <Header />
      <QualityComponent />
      <Footer />
    </>
  )
}
