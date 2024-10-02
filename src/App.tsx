import './App.css'
import User from './User/User'
import { UserContext } from './Context/UserContext'

function App() {

  return (
    <>
      <UserContext.Provider value={"pepito"}>
        <User />
      </UserContext.Provider>
    </>
  )
}

export default App
