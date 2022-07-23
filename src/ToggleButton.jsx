import React from 'react'
import { useContext } from 'react';
import { DarkModeContext } from './context';
const ToggleButton = () => {
    const { darkMode, toggleDarkMode } =           
   useContext(DarkModeContext);

  const submitHandler = (e) => {
    e.preventDefault();
    toggleDarkMode();
  }

  return (
        <div>
      <p style={{ backgroundColor: darkMode ? 'black' : 'grey', color: darkMode ? 'white' : 'black' }} > CHANGE THEME </p>
      <button type="button" onClick={submitHandler} >
        TOGGLE
      </button>
    </div>
  )
}

export default ToggleButton