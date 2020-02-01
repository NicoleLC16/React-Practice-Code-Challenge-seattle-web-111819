import React, { Fragment } from 'react'
//props of single sushi


const Sushi = (props) => {
  
  const handleClick= () => {
    props.onEatSushi(props.Singlesushi)
  
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
      { props.Singlesushi.eaten ? null : <img src={props.Singlesushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.Singlesushi.name} - ${props.Singlesushi.price}
      </h4>
    </div>
  )
}

export default Sushi