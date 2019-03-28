import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav
      className="navbar navbar-dark fixed-top navbar-expand-lg"
      style={headerStyle}
    >
      <span className="navbar-brand mb-0 h1">PIZZA STEALER</span>
      <img
        src="https://static.thenounproject.com/png/320887-200.png"
        width="50"
        height="50"
        alt=""
      />

      <span className="navbar-text" style={{ marginLeft: '1%' }}>
        Take advantage of your friends' pizza orders
      </span>
      <ul className="navbar-nav ml-auto navbar-right">
        <li className="nav-item" style={navItem}>
          <Link to="/friends">Friends</Link>
        </li>
        <li className="nav-item" style={navItem}>
          <Link to="/stealpizza">Steal Pizza</Link>
        </li>
      </ul>
    </nav>
  );
}

const headerStyle = {
  backgroundColor: '#3a4351',
  color: 'white'
};

const navItem = {
  margin: '10px',
  backgroundColor: 'white',
  padding: '8px',
  borderRadius: '5%'
};
