import './App.css'
import Card from './Card/Card.tsx'

function App() {

  return (
    <div className='container'>
      <Card>
        <h2>Task 1</h2>
        <p className='description'>Task 1 description</p>
        <p>Assigned to: John Doe</p>
        <p>Start date: 2021-01-01</p>
        <p>Due date: 2021-01-31</p>
      </Card>
      <Card>
        <h2>Task 2</h2>
        <p className='description'>Task 2 description</p>
        <p>Assigned to: Jane Doe</p>
        <p>Start date: 2021-02-01</p>
        <p>Due date: 2021-02-28</p>
      </Card>
      <Card>
        <h2>Task 3</h2>
        <p className='description'>Task 3 description</p>
        <p>Assigned to: John Doe</p>
        <p>Start date: 2021-03-01</p>
        <p>Due date: 2021-03-31</p>
      </Card>
    </div>
  )
}

export default App
