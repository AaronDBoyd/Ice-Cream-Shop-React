import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'

function EditIceCreamForm(props) {
  const { iceCream } = props;

  function handleEditIceCreamFormSubmission(event) {
    event.preventDefault();
    props.onEditIceCream({
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      id: iceCream.id
    })
  }

  return (
    <React.Fragment>
      <h1>- Edit Ice Cream -</h1>
      <ReusableForm 
        formSubmissionHandler={handleEditIceCreamFormSubmission}
        buttonText="Update Ice Cream"
      />
    </React.Fragment>
  )
}

EditIceCreamForm.propTypes = {
  iceCream: PropTypes.object,
  onEditIceCream: PropTypes.func
}

export default EditIceCreamForm

