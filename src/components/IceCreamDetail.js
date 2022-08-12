import React from 'react'
import PropTypes from 'prop-types'

function IceCreamDetail(props) {
  const { iceCream, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1> Ice Cream Detail </h1>
      <h3> {iceCream.flavor} </h3>
      <h3> ${iceCream.price} </h3>
      <h4> {iceCream.description} </h4>
      <h4> {iceCream.quantity} </h4>

      <button onClick={() => props.onClickingRestock(iceCream.id) }>Restock</button>

      <button onClick={ props.onClickingEdit }>Update Ice Cream</button>
      <button onClick={() => onClickingDelete(iceCream.id)}>Delete Ice Cream</button>
      <hr />
    </React.Fragment>
  )
}

IceCreamDetail.propTypes = {
  iceCream: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingRestock: PropTypes.func,
}

export default IceCreamDetail
