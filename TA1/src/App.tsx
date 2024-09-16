import './App.css'
import Card from './Card'

function App() {

  return (
    <div className='container'>
      <Card title="Task 1" description="Do something" assignedTo="John Doe" startDate="2021-10-01" dueDate="2021-10-15" />
      <Card title="Task 2" description="Do something else" assignedTo="Jane Doe" startDate="2021-10-16" dueDate="2021-10" />
      <Card title="Task 3" description="Do something else" assignedTo="Jane Doe" startDate="2021-10-16" dueDate="2021-10-31" />
    </div>
  )
}

export default App
