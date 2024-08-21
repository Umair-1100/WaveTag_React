import React from 'react'
import ThemeLayoutMain from './ThemeLayoutMain'
import { Outlet } from 'react-router'

const ThemeLayout = () => {
  return (
    <div>
        <ThemeLayoutMain>
            <Outlet/>
        </ThemeLayoutMain>
    </div>
  )
}

export default ThemeLayout