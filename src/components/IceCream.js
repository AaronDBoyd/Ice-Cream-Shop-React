import React from 'react'
import PropTypes from 'prop-types'

function IceCream(props) {
  let buyButtonVisible = null;
  let buttonText = null;

  if (props.quantity > 0) {
    buyButtonVisible = (() => props.whenBuyClicked(props.id));
    buttonText = "Buy Pint";
  } else {
    buttonText = "Out of Stock";
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenIceCreamClicked(props.id)}> 
        <h3>{props.flavor}</h3>
        <h3>${props.price}</h3>
        <h4>{props.description}</h4>
        <h4>Pints Left: {props.quantity}</h4>
      </div>
      <button onClick={buyButtonVisible}>{buttonText}</button>
      <hr />
    </React.Fragment>
  )
}

IceCream.propTypes = {
  flavor: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenIceCreamClicked: PropTypes.func,
  whenBuyClicked: PropTypes.func,
}

export default IceCream
