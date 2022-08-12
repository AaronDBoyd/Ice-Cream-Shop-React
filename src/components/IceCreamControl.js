import React from 'react';
import IceCreamList from './IceCreamList';
import IceCreamDetail from './IceCreamDetail';
import NewIceCreamForm from './NewIceCreamForm';
import EditIceCreamForm from './EditIceCreamForm';

class IceCreamControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedIceCream: null,
      mainIceCreamList: [],
      editing: false,
    };
  }



}

export default IceCreamControl;