import React, { Component } from 'react'
import Carousel from '../Carousel'
import HotTicketSection from '../HotTicketSection'
import CategorySection from '../CategorySection'
import SellersSection from '../SellersSection'
import FeaturedSection from '../FeaturedSection'
import Footer from '../Footer'
import Header from '../Header/Header'


class Layout extends Component {
    render () {
        return (
            <div>
                <Header />
                <Carousel />
                <HotTicketSection />
                <CategorySection />
                <SellersSection/>
                <FeaturedSection />
                <Footer />
            </div>
        )
    }
}

export default Layout