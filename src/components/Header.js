import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg" style={headerStyle}>
      <span className="navbar-brand mb-0 h1">PIZZA STEALER</span>
      <a class="navbar-brand" href="#">
        <img
          src="https://static.thenounproject.com/png/320887-200.png"
          width="30"
          height="30"
          alt=""
        />
      </a>
      <span class="navbar-text">
        Take advantage of your friends' pizza orders
      </span>
      <ul className="navbar-nav ml-auto navbar-right">
        <li className="nav-item" style={navItem}>
          Friends
        </li>
        <li className="nav-item" style={navItem}>
          Steal Pizza
        </li>
      </ul>
    </nav>
  )
}

const headerStyle = {
  backgroundColor: '#3a4351',
  color: 'white'
}

const navItem = {
  margin: '10px'
}
