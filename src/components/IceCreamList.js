import React from "react";
import PropTypes from "prop-types";
import IceCream from "./IceCream";

function IceCreamList(props) {
  return (
    <React.Fragment>
      <h2>Ice Cream Selection</h2>
      <hr />
      {props.iceCreamList.map((iceCream) => (
        <IceCream
          whenBuyClicked={props.onClickingBuy}
          whenIceCreamClicked={props.onIceCreamSelection}
          flavor={iceCream.flavor}
          price={iceCream.price}
          description={iceCream.description}
          quantity={iceCream.quantity}
          id={iceCream.id}
          key={iceCream.id}
        />
      ))}
    </React.Fragment>
  );
}

IceCreamList.propTypes = {
  iceCreamList: PropTypes.array,
  onIceCreamSelection: PropTypes.func,
  onClickingBuy: PropTypes.func,
};

export default IceCreamList;
