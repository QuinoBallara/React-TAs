import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div>
            <p>About</p>
            <p><Link to="/home">Home</Link></p>
            <p><Link to="/contact">Contact</Link></p>
        </div>
    )
}
