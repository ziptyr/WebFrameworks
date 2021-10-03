import React from 'react'

export default function Title(props) {
  return (
    <div>
      <h1 id='title'>{ props.applicationName }</h1>
      <div id='titleSub'>{ props.applicationDescription }</div>
    </div>
  )
}
