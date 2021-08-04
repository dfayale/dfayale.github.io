import React from 'react'
import YaleLogo from '../img/dfayale-title.svg'

export const NavBar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-light bg-blue">
        <a class="navbar-brand" href="/">
          <img
            src={YaleLogo}
            alt="Design for America | Yale"
            height="30"
            class="d-inline-block align-top"
          />
          <span class="sr-only">Design for America Yale</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/projects">
                Projects
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/outreach">
                Outreach
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
