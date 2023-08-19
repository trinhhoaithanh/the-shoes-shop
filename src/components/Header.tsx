import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Header(props: Props) {
  return (
    <div>
        <section className='logo-header d-flex'>
            <div className='logo'>
                <NavLink to="">
                    <img src="./img/logoShoe.png" alt="..."/>
                </NavLink>
            </div>
            <div className='nav-bar-search'>

            </div>
        </section>
        <section className='menu'></section>
    </div>
  )
}