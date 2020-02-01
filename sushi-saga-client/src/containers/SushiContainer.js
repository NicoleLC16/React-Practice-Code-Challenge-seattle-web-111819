import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
//props of four sushis

const showSingleSushi = (props) => {
  return props.sushis.map(sushi => <Sushi Singlesushi={sushi} onEatSushi={props.onEatSushi}/>)
}
const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {showSingleSushi(props)}
        <MoreButton onMoreSushi={props.onMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer