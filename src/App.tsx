import './App.css'
import User from './User/User'
import Input from './Input/Input'
import { UserContext, UserProvider } from './Context/UserContext'
import { useState } from 'react'

function App() {

  return (
    <>
      <UserProvider>
        <Input />
        <User />
      </UserProvider>
    </>
  )
}

export default App
