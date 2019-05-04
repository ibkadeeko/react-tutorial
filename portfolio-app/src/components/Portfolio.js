import React from 'react'

const Portfolio = (props) => {
  return (
    <div>
      <p>This is the portfolio page for Item with id {props.match.params.id}</p>
    </div>
  )
}

export default Portfolio;
