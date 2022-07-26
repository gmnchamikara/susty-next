import React from 'react'
import CTA from '../components/home/CTA'
import BasicPageWrapper from '../components/layouts/BasicPageWrapper'
import PopularItems from '../components/Lists/Products/PopularItems'
import ShopByBrand from '../components/home/ShopByBrand'
import SuggestedSearches from '../components/home/SuggestedSearches'
import NewsFeedItems from '../components/home/NewsFeedItems'
import ClosetSpotlightItems from '../components/home/ClosetSpotlightItems'
import CommonItems from '../components/home/CommonItems'

const Index = () => {
    return (
        <BasicPageWrapper>
            <CTA />
            <PopularItems />
            <ShopByBrand />
            <SuggestedSearches />
            <NewsFeedItems />
            <ClosetSpotlightItems />
            <CommonItems />
        </BasicPageWrapper>
    )
}

export default Index
