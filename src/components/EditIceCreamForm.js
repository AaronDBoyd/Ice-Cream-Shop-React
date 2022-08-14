import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'

function EditIceCreamForm(props) {
  const { iceCream } = props;

  function handleEditIceCreamFormSubmission(event) {
    event.preventDefault();
    const flavor = !event.target.flavor.value ? iceCream.flavor : event.target.flavor.value;
    const price = !event.target.price.value ? iceCream.price : parseInt(event.target.price.value);
    const description = !event.target.description.value ? iceCream.description : event.target.description.value;

    props.onEditIceCream({
      flavor: flavor,
      price: price,
      description: description,
      quantity: 130,
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

