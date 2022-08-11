import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function NewIceCreamForm(props) {
  function handleNewIceCreamFormSubmission(event) {
    event.preventDefault();
    props.onNewIceCreamCreation({
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      description: event.target.decription.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <h1>- Add Ice Cream -</h1>
      <ReusableForm
        formSubmissionHandler={handleNewIceCreamFormSubmission}
        buttonText="Add Ice Cream"
      />
    </React.Fragment>
  );
}

NewIceCreamForm.propTypes = {
  onNewIceCreamCreation: PropTypes.func,
};

export default NewIceCreamForm;
