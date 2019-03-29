import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark navbar-expand-lg mb-3 py-1">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1"> PIZZA STEALER </span>{' '}
        <img
          src="https://static.thenounproject.com/png/320887-200.png"
          width="50"
          height="50"
          alt=""
        />
        <span
          className="navbar-text"
          style={{
            marginLeft: '1%'
          }}
        >
          Take advantage of your friends' online pizza orders{' '}
        </span>{' '}
        <form className="form-inline ml-auto navbar-right">
          <Link to="/friends">
            <button className="btn btn-sm btn-light"> 
            <i className="fas fa-user-friends" /> Friends 
            </button>
          </Link>
          <Link to="/stealpizza">
            <button className="btn btn-sm btn-light">
              <i className="fas fa-pizza-slice" /> Steal Pizza{' '}
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
}
