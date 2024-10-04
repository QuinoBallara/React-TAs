import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Home = ({ onInputChange }: { onInputChange: (value: string) => void }) => {
    const [user, setUser] = useState<string>("");

    const updateValue = (value: string) => {
        setUser(value);
        onInputChange(value);
    }

    return (
        <div>
            <p>Home</p>
            <input type="text" placeholder="Enter your user" value={user} onChange={(e) => { updateValue(e.target.value) }} />
            <p><Link to="/about">About</Link></p>
            <p><Link to="/contact">Contact</Link></p>
        </div>
    )
}
