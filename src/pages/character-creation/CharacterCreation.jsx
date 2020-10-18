import React from "react"

import Post from "../../components/post/Post"

const CharacaterCreation = () => {
  return (
    <div>
      <Post title="Character Creation" date="10/17/2020">
        <p>This is the character creation page.</p>
        <p>Steps to character creation:</p>
        <ul>
          <li>Ancestory</li>
          <li>Heritage</li>
          <li>Background</li>
          <li>Class</li>
          <li>Nationality</li>
          <li>Deity</li>
        </ul>
      </Post>
    </div>
  )
}

export default CharacaterCreation
