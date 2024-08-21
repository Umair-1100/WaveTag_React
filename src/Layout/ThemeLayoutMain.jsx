import React from 'react'
import ThemeNavbar from '../components/Themes/ThemeNavbar'
import { Outlet } from 'react-router'

const ThemeLayoutMain = ({children}) => {
  return (
    <>
        <ThemeNavbar/>
        {children}
    </>
  )
}

export default ThemeLayoutMain