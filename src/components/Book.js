import React from 'react'

const Book = (props) => {
  return(
    <div>
      <h1>{props.book && props.book.attributes.title}</h1>
      <p>By {props.book && props.book.attributes.author}</p>
    </div>
  )
}

export default Book
