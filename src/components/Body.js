import React from 'react'
import { Carousel } from './Carousel'
import Card  from './Cards'
import { Collection_Trending } from './Collection_Trending'

export default function Body  () {
    return (
        <div>
            <Carousel/>
            <Card/>
            <Collection_Trending/>
        </div>
    )
}

