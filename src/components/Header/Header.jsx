import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import "./Header.css";

function Header() {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar/>
            <div className="header-content flex flex-c text-center text-white">
                <h2 className='header-title text-capitalize'>Find your book of choice.</h2><br/>
                <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo corporis aperiam veniam, aliquid blanditiis labore ipsam accusamus neque earum quas cupiditate repellat, at nulla voluptatem vitae aspernatur soluta! Laborum!</p>
                <SearchForm/>
            </div>
        </header>
    </div>
  )
}

export default Header