import React from "react"

import "./Navbar.css"

import Social from "../social/Social"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="links">
        <li className="menu">World Lore</li>
        <li className="submenu">Nations</li>
        <li className="submenu">Gods</li>
        <li className="submenu">Planes</li>
        <li className="submenu">Timeline</li>
        <li className="menu">
          <Link to="/character-creation">Character Creation</Link>
        </li>
        <li className="submenu">
          <Link to="/ancestory">Ancestory </Link>
        </li>
        <li className="submenu">Heritage</li>
        <li className="submenu">Background</li>
        <li className="submenu">Class</li>
        <li className="submenu">Nationality</li>
        <li className="submenu">Deity</li>
        <li className="menu">Rules</li>
        <li className="submenu">Actions</li>
        <li className="submenu">Common</li>
        <li className="submenu">Homebrew</li>
        <li className="submenu">Death</li>
      </ul>
      <Social />
    </div>
  )
}

export default Navbar
