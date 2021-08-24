import React from 'react'
import YHack from '../img/yhack.jpeg'

const Pathways = '/projects/pathways-primary.jpeg'

export const Outreach = () => {
  return (
    <main role="main">
      <section>
        <div class="container-fluid">
          <div class="row justify-content-center my-5">
            <div class="col-8 mb-3">
              <p class="mb-4">
                <strong>Design thinking</strong> is a valuable tool with
                applications in education, business management, software
                engineering, graphic design, and more. Through our workshops,
                students learn to put these techniques into practice and
                cultivating skills in hands-on collaboration, problem solving,
                and outside-the-box thinking.
              </p>
              <p class="mb-4">
                We hold workshops for all ages, from Yale School of Management
                to local elementary school students, and from 20-minute
                hackathon sprints to week-long design intensives. We explain the
                principles of design thinking, practice creativity through
                warm-up exercises, and collaborate in groups to build solutions
                for real problems. Within our team, we hold tutorials on
                human-centered design specifics, including user interviews,
                ideation, and prototyping.
              </p>
              <p>
                If you are an educator, an entrepreneur, or are excited to bring
                Design Thinking to your group, please don’t hesitate to email us
                at{' '}
                <a href="mailto:yale@designforamerica.com">
                  yale@designforamerica.com
                </a>{' '}
                and invite us to lead a (free!) workshop with you!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="outreach-postit">
          <div class="outreach-container">
            <div class="outreach-text">
              <h3>Yale Pathways to Science</h3>
              <p>
                This past year, we partnered with Yale Pathways to Science to
                promote science, technology, engineering, and math education for
                middle and high school students in the New Haven area.
                Challenged with the task of a virtual environment, the team
                carefully curated three, online mini-series over the course of
                the school year to teach New Haven students how to use the
                design thinking process. Each workshop taught the students how
                to immerse in and reframe their problem space, to prototype in
                collaborative applications like TinkerCAD, and to build and
                iterate refined products including physical models, 3D modeled
                worlds, and video games.
              </p>
            </div>
            <div class="outreach-child">
              <img class="content-img" src={Pathways} alt="" />
            </div>
            <div class="outreach-child">
              <img class="content-img" src={YHack} alt="" />
            </div>
            <div class="outreach-text">
              <h3>YHack: Undergraduate Hackathon at Yale University</h3>
              <p>
                The YHack event is a 36-hour hackathon that brings together
                students from all over the U.S. with different backgrounds
                together to create and build. Our club has partnered with the
                YHack organization to drive interest in the hackathon and
                participation among DFA studio members across the country.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
