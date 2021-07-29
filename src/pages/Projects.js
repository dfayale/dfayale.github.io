import React from 'react'
import First from '../img/brick-2019-2020.svg'
import Second from '../img/brick-2018-2019.svg'
import { ProjectContent } from '../content/content'

export const ProjectsOld = () => {
  return (
    <main role="main">
      <section>
        <div class="container-fluid">
          <div class="row justify-content-center my-5">
            <div class="col-md-8 text-center mb-3">
              <p class="lead">
                Collaborating with the New Haven and Yale community, we design,
                build, and implement local and sustainable projects with the
                potential for national impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container-fluid dfa-list-projects">
          <div class="row justify-content-center py-3">
            <div class="col-sm-4 d-flex align-items-center justify-content-end">
              <div class="brick-title title-year">
                <img
                  src={First}
                  alt=""
                  // style="transform: rotate(-3deg); margin-top: -9px;"
                />
                <span class="sr-only">2019-2020</span>
              </div>
            </div>
            <div class="col-sm-4 d-flex align-items-center">
              <ul class="m-0">
                <li>
                  <a href="#">Project Project Project</a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="/projects/ctsbdc">
                    CT Small Business Development Center
                  </a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Project Project Project Project</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-center py-3">
            <div class="col-sm-4 d-flex align-items-center justify-content-end">
              <div class="brick-title title-year">
                <img
                  src={Second}
                  alt=""
                  // style="transform: rotate(2deg); margin-bottom: -10px"
                />
                <span class="sr-only">2018-2019</span>
              </div>
            </div>
            <div class="col-sm-4 d-flex align-items-center">
              <ul class="m-0">
                <li>
                  <a href="#">Project Project Project</a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Project Project </a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Project Project Project Project</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-center py-3">
            <div class="col-sm-4 d-flex align-items-center justify-content-end">
              <div class="brick-title title-year">
                <img
                  src="/img/brick-2017-2018.svg"
                  alt=""
                  // style="transform: rotate(5deg); margin-top: -10px"
                />
                <span class="sr-only">2017-2018</span>
              </div>
            </div>
            <div class="col-sm-4 d-flex align-items-center">
              <ul class="m-0">
                <li>
                  <a href="#">Project Project Project</a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Project Project </a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Project Project Project Project</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-center py-3">
            <div class="col-sm-4 d-flex align-items-center justify-content-end">
              <div class="brick-title title-year">
                <img
                  src="/img/brick-2016-2017.svg"
                  alt=""
                  // style="transform: rotate(-5deg); margin-top: -10px"
                />
                <span class="sr-only">2016-2017</span>
              </div>
            </div>
            <div class="col-sm-4 d-flex align-items-center">
              <ul class="m-0">
                <li>
                  <a href="#">Project Project Project</a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Project Project </a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Project Project Project Project</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export const Projects = () => {
  const primaryImages = []
  for (const [projectName, details] of Object.entries(ProjectContent)) {
    console.log(`${projectName}: ${details}`)
    primaryImages.push(<img src={details.imageLinks[0]} />)
  }
  return primaryImages
}
