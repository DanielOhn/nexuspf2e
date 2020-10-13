import React from "react"
import "./App.css"

import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Navbar />
        <div className="posts">Other stuff</div>
      </div>
    </div>
  )
}

export default App
