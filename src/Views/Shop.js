import React from 'react'
import ShopHeroSection from '../components/ShopHeroSection/ShopHeroSection'
import AlertBanner from '../sharedComponents/AlertBanner/AlerBanner'
import Header from '../sharedComponents/Header/Header'
import Slider from '../components/Slider/Slider'
const Shop = () => {
  return (
    <React.Fragment>
        <AlertBanner />
        <Header />
        <Slider />
    </React.Fragment>
  )
}

export default Shop