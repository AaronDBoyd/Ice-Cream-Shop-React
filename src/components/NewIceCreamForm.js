import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function NewIceCreamForm(props) {
  function handleNewIceCreamFormSubmission(event) {
    event.preventDefault();
    const flavor = !event.target.flavor.value ? "Mystery Flavor" : event.target.flavor.value;
    const price = !event.target.price.value ? 13 : parseInt(event.target.price.value);
    const description = !event.target.description.value ? "Ipsum Lorem Gibberish Blah Blah" : event.target.description.value;
    

    props.onNewIceCreamCreation({
      flavor: flavor,
      price: price,
      description: description,
      quantity: 130,
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
