import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from './Movies';
import Upload from './Upload';
import './App.css'

const newBtn = {
  margin: '5rem auto',
  display: 'flex',
  padding: '10px 16px',
  fontSize: '15px',
  borderRadius: '5px',
  outline: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  textDecoration: 'none',
  fontFamily: 'Manrope',
  height: '20px',

}

function App() {

  return (
    <>
      <div style={{ display: 'flex', width: '100%', height: '12rem', position: 'relative', background: 'linear-gradient(189deg, #aa4b6b, #6b6b83,#3b8d99)' }}>
        <h2 style={{ color: 'white', fontFamily: 'Manrope' }}>Watch All Latest Moview On Moviesspot.com</h2>
        <div style={{
          display: 'flex', width: '20rem', position: 'absolute',
          right: 0,
          bottom: 0,
          height: '8rem',
        }}>

          <NavLink to='/' style={({ isActive }) =>
            isActive ? { ...newBtn, background: 'rgb(222 7 159)' } : { ...newBtn, background: '#760354', }
          }> Upload </NavLink>
          <NavLink to='/movies' style={({ isActive }) =>
            isActive ? { ...newBtn, background: 'rgb(222 7 159)' } : { ...newBtn, background: '#760354', }
          }> Watch All Movies </NavLink>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={< Upload />} />
        <Route path="movies" element={< Movies />} />
      </Routes>
    </>
  );
}

export default App;
