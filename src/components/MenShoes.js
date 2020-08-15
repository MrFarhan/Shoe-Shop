import React from 'react'
import { Outlet } from 'react-router-dom'

export function MenShoes  () {
    return (
        <div>
            <h1>Mans Shoes here</h1>
            <hr/>
            <Outlet/>
        </div>
    )
}
