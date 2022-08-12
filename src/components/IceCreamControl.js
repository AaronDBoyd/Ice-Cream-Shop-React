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

  handleClick = () => {
    if (this.state.selectedIceCream != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedIceCream: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }))
    }
  };

  handleAddingIceCreamToList = (newIceCream) => {
    const newMainIceCreamList = this.state.mainIceCreamList.concat(newIceCream);
    this.setState({
      mainIceCreamList: newMainIceCreamList,
      formVisibleOnPage: false,
    })
  }

  handleChangingSelectedIceCream = (id) => {
    const selectedIceCream = this.state.mainIceCreamList.filter(
      (iceCream) => iceCream.id === id 
    )[0];
    this.setState({ selectedIceCream: selectedIceCream})
  }

  handleEditClick = () => {
    this.setState({ editing: true});
  };

  handleEditingIceCreamInList = (iceCreamToEdit) => {
    const editedMainIceCreamList = this.state.mainIceCreamList.filter(
      (iceCream) => iceCream.id !== this.state.selectedIceCream.id) 
      .concat(iceCreamToEdit);
    this.setState({
      mainIceCreamList: editedMainIceCreamList,
      editing: false,
      selectedIceCream: null,
    })
  }

  handleDeletingIceCream = (id) => {
    const newMainIceCreamList = this.state.mainIceCreamList.filter(
      (iceCream) => iceCream.id !== id
    );
    this.setState({
      mainIceCreamList: newMainIceCreamList,
      selectedIceCream: null,
    })
  }


}

export default IceCreamControl;