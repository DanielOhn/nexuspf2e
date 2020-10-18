import React from "react"
import "./App.css"

import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"

import Landing from "../landing/Landing"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CharacaterCreation from "../character-creation/CharacterCreation"
import Ancestory from "../character-creation/ancestory/Ancestory"

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact render={() => <Landing />} />
            <Route
              path="/character-creation"
              exact
              render={() => <CharacaterCreation />}
            />
            <Route path="/ancestory" exact render={() => <Ancestory />} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
