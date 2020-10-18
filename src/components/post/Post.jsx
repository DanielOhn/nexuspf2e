import React from "react"

import "./Post.css"

const Post = (props) => {
  return (
    <div className="post">
      <div className="heading">
        <h2>{props.title}</h2>
        <small>{props.date}</small>
      </div>
      <div className="text">{props.children}</div>
    </div>
  )
}

export default Post
