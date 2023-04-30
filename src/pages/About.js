import React from 'react'
import CurrentBoardImage from '../img/current-board.svg'
import { CurrentBoard} from '../content/content'

const getHeadshots = (directory) => {
  const members = []
  for (const member of directory) {
    const current_role = member.role || member.current_role
    const previous_role = member.previous_role || ''
    members.push(
      <div>
        <img src={member.headshotLink} alt="board member headshot" />
        <p>{member.name}</p>
        <p>{previous_role}</p>
        <p class="font-weight-bold">{current_role}</p>
      </div>
    )
  }
  return members
}

export const About = () => {
  return (
    <div>
      <div class="about-header">
        <div class="row justify-content-center">
          <div class="col-8">
            <p class="lead mb-4">
              We are an interdisciplinary group of undergraduate + graduate
              students who design and implement local, sustainable projects with
              the potential for national impact.
            </p>
            <p>
              We believe in the power of <strong>Human-Centered Design</strong>{' '}
              to make positive social change, and regularly collaborate with the
              New Haven and Yale community to learn + teach design thinking
              strategies. We are part of a{' '}
              <a href="https://designforamerica.com/">national network</a> of
              passionate young thinkers moving beyond the classroom to reshape
              the way college students engage with our communities.
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="brick-title title-current-members">
          <img src={CurrentBoardImage} alt="current board" />
          <span class="sr-only">Current Board</span>
        </div>
      </div>
      <div class="about-headshots">{getHeadshots(CurrentBoard)}</div>
      {/* <div class="d-flex justify-content-center">
        <div class="brick-title title-alumni">
          <img src={AlumniImage} alt="alumni" />
          <span class="sr-only">Alumni</span>
        </div>
      </div>
      <div class="about-headshots">{getHeadshots(Alumni)}</div> */}
    </div>
  )
}
