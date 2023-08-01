import React from 'react'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div>
      {/* <nav className={navStyles.nav}>
          <ul className={navStyles.ul}>
            <li className={navStyles.li}>
              Sha<span className={navStyles.span}>shank</span>
            </li>
          </ul>
          <ul className={navStyles.ul}>
            <Link href='/'>
              <li className={navStyles.li2}>Home</li>
            </Link>
            <Link href='/about'>
              <li className={navStyles.li2}>About Me</li>
            </Link>
            <Link href='/education'>
              <li className={navStyles.li2}>Education</li>
            </Link>
            <Link href='/skills'>
              <li className={navStyles.li2}>Skills</li>
            </Link>
            <Link href='/contact'>
              <li className={navStyles.li2}>Contact Us</li>
            </Link>
          </ul>
      </nav> */}

      
    <nav>
        <ul class="name-nav">
            <li class="my-name">Sha<span>shank</span></li>
        </ul>
        <ul class="nav-content">
            <Link href="/">
                <li>Home</li>
            </Link>
            <Link href="/about">
                <li>About</li>
            </Link>
            <Link href="/education">
                <li>Education</li>
            </Link>
            <Link href="/contact">
                <li>Contact Me</li>
            </Link>
        </ul>
    </nav>
    </div>
  )
}

export default Nav