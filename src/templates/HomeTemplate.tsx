import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

type Props = {}

const HomeTemplate = (props: Props) => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <footer>Footers</footer>
    </div>
  )
}
export default HomeTemplate