import React from 'react'
import { Link } from 'react-router-dom'

export const Contact = () => {
    return (
        <div>
            <p>Contact</p>
            <p><Link to="/home">Home</Link></p>
            <p><Link to="/about">About</Link></p>
        </div>
    )
}