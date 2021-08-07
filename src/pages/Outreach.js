import React from 'react'
import Test from '../img/person-test.jpg'

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
                a nice sentence Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vitae, dignissimos?
              </p>
            </div>
            <div class="outreach-child">
              <img class="content-img" src={Test} alt="" />
            </div>
            <div class="outreach-child">
              <img class="content-img" src={Test} alt="" />
            </div>
            <div class="outreach-text">
              <h3>YHack: Undergraduate Hackathon at Yale University</h3>
              <p>
                a nice sentence Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vitae, dignissimos?
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
