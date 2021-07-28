import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectContent } from '../content/content'

const getImages = (imageLinks) => {
  const images = []
  for (const imageLink of imageLinks) {
    console.log(imageLink)
    images.push(<img src={imageLink} />)
  }
  return images
}

export const Project = (props) => {
  const { project } = useParams()
  const { title, summary, description, imageLinks } = ProjectContent[project]
  const images = getImages(imageLinks)
  return (
    <main>
      <h1>{title}</h1>
      <h3>{summary}</h3>
      <p>{description}</p>
      {images}
    </main>
  )
}
