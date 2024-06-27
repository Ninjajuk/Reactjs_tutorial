'use client'
import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './context';


const ThemeContextexamle = () => {
  const [theme, setTheme] = useState('light');
// const dark = useContext(ThemeContext);
const className=theme
// console.log(className)
    function handleTheme(){
      setTheme(theme === 'light' ? 'bg-gray-400' : 'light');
    //   console.log('theme chnaged',theme)
    }

  return (
    <ThemeContext.Provider value={{theme}}>
      <section className={className}>
      <h1>UserData</h1>
      <button onClick={handleTheme} className={`p-2 border-2 cursor-pointer rounded-md bg-blue-400 ${theme}`}>Click to Dark Mode</button>
      {/* <p> {error}</p> */}
      </section>

    </ThemeContext.Provider>
  );
}

export default ThemeContextexamle