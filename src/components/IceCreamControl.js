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

  handleBuyingIceCream = (id) => {
    const selectedItem = this.state.mainIceCreamList.filter((iceCream) => iceCream.id === id)[0]
    selectedItem.quantity -= 1;

    const editedMainIceCreamList = this.state.mainIceCreamList.filter(
      (iceCream) => iceCream.id !== id) 
      .concat(selectedItem);

    this.setState({
      mainIceCreamList: editedMainIceCreamList,
      editing: false,
      selectedIceCream: null,
    })
  }

  handleRestockClick = (id) => {
    const selectedItem = this.state.mainIceCreamList.filter((iceCream) => iceCream.id === id)[0]
    selectedItem.quantity += 10;
    const editedMainIceCreamList = this.state.mainIceCreamList.filter(
      (iceCream) => iceCream.id !== id) 
      .concat(selectedItem);

    this.setState({
      mainIceCreamList: editedMainIceCreamList,
      editing: false,
      selectedIceCream: null,
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = 
      <EditIceCreamForm
        iceCream={this.state.selectedIceCream}
        onEditIceCream={this.handleEditingIceCreamInList}
      />
      buttonText = "View Ice Cream List";
    } else if (this.state.selectedIceCream != null) {
      currentlyVisibleState = (
        <IceCreamDetail
          iceCream={this.state.selectedIceCream}
          onClickingDelete={this.handleDeletingIceCream}
          onClickingEdit={this.handleEditClick}
          onClickingRestock={this.handleRestockClick}
        />
      );
      buttonText = "View Ice Cream List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewIceCreamForm onNewIceCreamCreation={this.handleAddingIceCreamToList} />
      );
      buttonText = "View Ice Cream List";
    } else {
      currentlyVisibleState = (
        <IceCreamList
          iceCreamList={this.state.mainIceCreamList}
          onIceCreamSelection={this.handleChangingSelectedIceCream}
          onClickingBuy={this.handleBuyingIceCream}
        />
      );
      buttonText = "Add New Ice Cream";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <br />
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }


}

export default IceCreamControl;