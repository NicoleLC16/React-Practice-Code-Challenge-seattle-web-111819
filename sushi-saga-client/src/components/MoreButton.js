import React from 'react'

const handleClick = props => {
  props.onMoreSushi()
}

const MoreButton = (props) => {
    return <button onClick={() => handleClick(props)}>
            More sushi!
          </button>
}

export default MoreButton