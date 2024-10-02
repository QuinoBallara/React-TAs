import { UserContext, UserProvider } from "../Context/UserContext";

import React, { useContext, useState } from 'react'

export const Input = () => {

    const { username, changeUsername } = useContext(UserContext);

    return (
        <input type="text" onChange={(e) => changeUsername(e.target.value)} value={username} />
    )
}

export default Input
