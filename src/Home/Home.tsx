import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <p>Home</p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/contact">Contact</Link></p>
        </div>
    )
}
