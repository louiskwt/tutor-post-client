import { useState } from 'react'
import './App.css'
import PostList from './components/List/PostList'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <PostList />
    </div>
  )
}

export default App
