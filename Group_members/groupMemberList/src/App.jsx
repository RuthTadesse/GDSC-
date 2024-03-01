import { useState } from 'react'
import Greeting from './Greeting'
import GroupMembersList from './GroupMeber'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GroupMembersList />
     <Greeting /> 
    </>
  )
}

export default App
