import React from 'react'
import { Outlet } from 'react-router'

export default function PostLayout() {
  return (
    <div>
        <header>
            this is post layout
        </header>
        <Outlet/>
    </div>
  )
}
