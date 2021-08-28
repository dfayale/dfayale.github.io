import React from 'react'
import First from '../img/brick-2019-2020.svg'
import Second from '../img/brick-2018-2019.svg'
import { ProjectContent } from '../content/content'

export const Projects = () => {
  const primaryImages = []
  for (const [projectName, details] of Object.entries(ProjectContent)) {
    console.log(`${projectName}: ${details}`)
    const path = '/projects/' + projectName
    primaryImages.push(
      <div class="project-pic">
        <a href={path}>
          <img src={details.imageLinks[0]} />
        </a>
        <a href={path}>
          <div class="project-pic_overlay">
            <p class="project-pic_description">{details.summary}</p>
            <p class="project-pic_year">{details.year}</p>
          </div>
        </a>
      </div>
    )
  }
  return <div class="project-links">{primaryImages}</div>
}
