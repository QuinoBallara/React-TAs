import './App.css'
import React, { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])


  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}><span>{user.name}</span>: {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
