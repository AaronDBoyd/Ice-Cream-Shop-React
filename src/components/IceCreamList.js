import React from "react";
import PropTypes from "prop-types";
import IceCream from "./IceCream";

function IceCreamList(props) {
  return (
    <React.Fragment>
      <h1>- Our Selection -</h1>
      <div className="itemList">
        {props.iceCreamList.map((iceCream) => (
          <div className="items">
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
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

IceCreamList.propTypes = {
  iceCreamList: PropTypes.array,
  onIceCreamSelection: PropTypes.func,
  onClickingBuy: PropTypes.func,
};

export default IceCreamList;
