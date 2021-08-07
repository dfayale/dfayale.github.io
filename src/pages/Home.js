import React from 'react'
import WhoAreWe from '../img/home_1.jpg'
import HumanCenteredDesign from '../img/home_2.jpg'
import WhatDoWeDo from '../img/home_3.jpg'
import HowDoIJoin from '../img/home_4.jpg'
import GroupPhoto from '../img/carousel_5.jpg'

export const Home = () => {
  return (
    <main role="main">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item carousel-item-1 active" />
          <div class="carousel-item carousel-item-2" />
          <div class="carousel-item carousel-item-3" />
          <div class="carousel-item carousel-item-4" />
          <div class="carousel-item carousel-item-5" />
        </div>
        <a
          class="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <section>
        <div class="postit-section postit-blue">
          <div class="corner-topleft" />
          <div class="corner-bottomleft" />
          <div class="row mb-5">
            <div class="col-6 px-4 d-flex align-items-center">
              <div>
                <h3>Who are we?</h3>
                <p>
                  We’re an interdisciplinary group of Yale University students
                  who believe in the power of human-centered design to make
                  positive social change.
                </p>
                <p>
                  <a class="btn btn-lg" href="/about/">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div class="col-6 px-4">
              <div>
                <img src={WhoAreWe} alt="" class="content-img" />
              </div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-6 px-4">
              <div>
                <img src={HumanCenteredDesign} alt="" class="content-img" />
              </div>
            </div>
            <div class="col-6 px-4 d-flex align-items-center">
              <div>
                <h3>Human-centered design?</h3>
                <p>
                  Human-centered design is an approach to building things that
                  starts with the people you’re designing for and ends with new
                  solutions that are tailor made to suit their needs.
                </p>
                <p>
                  It’s all about forming deep empathy with the people you’re
                  designing for, thinking up wacky but promising ideas, building
                  lots of prototypes, and eventually putting your new solution
                  out in the real world.
                </p>
              </div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-6 px-4 d-flex align-items-center">
              <div>
                <h3>What do we do?</h3>
                <p>
                  We partner with New Haven-area nonprofit organizations to
                  design, build, and implement solutions with the potential for
                  national impact.
                </p>
                <p>
                  We’ve worked with Y2Y New Haven, New Haven Free Clinic, New
                  Haven Reads, and countless other community partners.
                </p>
                <p class="emphasis">
                  <a class="btn btn-lg" href="/projects">
                    See Projects
                  </a>
                </p>
              </div>
            </div>
            <div class="col-6 px-4">
              <div>
                <img src={WhatDoWeDo} alt="" class="content-img" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6 px-4">
              <div>
                <img src={HowDoIJoin} alt="" class="content-img" />
              </div>
            </div>
            <div class="col-6 px-4 d-flex align-items-center">
              <div>
                <h3>How do I join?</h3>
                <p>
                  We welcome all undergrad + grad students that are passionate
                  about bringing positive change to the New Haven community. No
                  design experience is required!
                </p>
                <p class="emphasis">
                  <a class="btn btn-lg" href="https://www.facebook.com/DfaYale">
                    Follow us on Facebook
                  </a>
                </p>
                <p class="emphasis">
                  <a class="btn btn-lg" href="">
                    Sign up for our email list
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="postit-section postit-blue">
          <div class="row mb-5">
            <div class="col-6 px-4">
              <h3>Projects</h3>
              <p>
                We work on 4-6 projects per year with 5-7 students on each team.
                Teams will each tackle a different design challenge with the
                goal of producing positive change for the community. Students
                learn technical and design skills over the course of each
                project.
              </p>
            </div>
            <div class="col-6 px-4">
              <h3>Workshops</h3>
              <p>
                We hold workshops for all ages, from the Yale School of
                Management to local elementary schools. Within our team, we hold
                workshops on human-centered design, working with users,
                ideation, and more.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-6 px-4">
              <h3>Speakers</h3>
              <p>
                We run speaker events throughout the year, bringing in
                professionals in various design industries (graphic design,
                architecture, research, etc.). We also collaborate with other
                university organizations to help run design-related events.
              </p>
            </div>
            <div class="col-6 px-4">
              <h3>Meetings</h3>
              <p>
                We meet in Yale's Center for Engineering, Innovation, and Design
                twice a week: once as an entire studio (Tuesdays 7-8 PM), and
                once in individual project teams to work on our year-long
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <img class="group-photo" src={GroupPhoto} />
      </section>
    </main>
  )
}
