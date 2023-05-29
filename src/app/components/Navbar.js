import React from 'react'
import './Navbar.css'
import Image from 'next/image'

export default function Navbar() {
  return (
      <nav>
            <Image src="/logo.png" height={60} width={60} alt="line"/>
            <ol className="links-container">
              <li>
                  <a href="#about-me" className="nav-link">about me</a>
              </li>
              <li>
                  <a href="my-work" className="nav-link">my work</a>
              </li>
              <li>
                  <a href="#resume" className="nav-link">resume</a>
              </li>
              <li>
                  <a href="#contact" className="nav-link">contact me</a>
              </li>
          </ol>
      </nav>
    )
}
