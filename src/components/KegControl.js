import React from "react";
import AddKegForm from "./AddKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
// Add Redux to Controller
import {connect} from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisible: false,
        // Where list of brews was removed from state
        currentBrew: null
      };
    }

    handleKegClick = () => {
  if (this.state.currentBrew != null) {
    this.setState({
      formVisible: false,
      currentBrew: null
    });  
  } else {
    this.setState(prevState => ({formVisible:!prevState.formVisible
    }));
  }
}

    handleClickingIncrement = (id) => {
      const individualKeg = this.state.fullListOfBrews.filter(brew => brew.id === id)[0];
      const kegUpdated = individualKeg.fluidOunces = individualKeg.fluidOunces + 1
      const fullListWithQuantityUpdate = this.state.fullListOfBrews.filter(brew => brew.id !== id).concat(kegUpdated)
      if (individualKeg.fluidOunces <= 124) {
      this.setState({
        fullListOfBrews:fullListWithQuantityUpdate,
      })
    }
  }
    handleClickingDecrement = (id) => {
      const individualKeg = this.state.fullListOfBrews.filter(brew => brew.id === id)[0];
      const kegUpdated = individualKeg.fluidOunces = individualKeg.fluidOunces - 1
      const fullListWithQuantityUpdate = this.state.fullListOfBrews.filter(brew => brew.id !== id).concat(kegUpdated)
      if (individualKeg.fluidOunces > 0) {
      this.setState({
        fullListOfBrews:fullListWithQuantityUpdate,
      });    
    }
  }

    handleUpdatingCurrentBrew = (id) => {
      const currentBrew= this.props.fullListOfBrews[id];
      this.setState({currentBrew: currentBrew})
    }

    addNewBrew = (addedBrew) => {
      const {dispatch} = this.props;
      const {name,brand,price,abv,fluidOunces} = addedBrew;
      const action = {
        type:'ADD_KEG',
        name: name,
        brand: brand,
        price: price,
        abv:abv,
        fluidOunces:fluidOunces
      }
      dispatch(action);
      this.setState({
        formVisible: false
      })
    }

    removeBrew = (id) => {
      const {dispatch} = this.props;
      const action = {
        type:'REMOVE_KEG',
        id: id
      }
      dispatch(action);
      this.setState({
        currentBrew: null
      });
    }
    
    render(){
      let selectedVisibleState = null;
      let buttonText = null;

      if (this.state.currentBrew != null) {
        selectedVisibleState = <KegDetail keg={this.state.currentBrew} onClickingDelete={this.removeBrew} onClickingDecrement={this.handleClickingDecrement} onClickingIncrement={this.handleClickingIncrement}/>
        buttonText= "Back to Full Brew Selection"
      }

      else if (this.state.formVisible) {
        selectedVisibleState = <AddKegForm onSubmit={this.addNewBrew} />
        buttonText="See our Selection of Brews"
      } else {
        selectedVisibleState = <KegList kegList={this.props.fullListOfBrews} onBrewSelection={this.handleUpdatingCurrentBrew}/>;
        buttonText="Add a New Brew"

    }
    return(
      <React.Fragment>
        {selectedVisibleState}
        <button className ='px-9 py-6 bg-black text-white active:bg-red-600 font-bold rounded shadow-xl hover: bg-red-500 text-white active:bg-red-600 font-bold rounded shadow-xl' onClick={this.handleKegClick}>{buttonText}</button>
      </React.Fragment>
    );
  }



  }

KegControl = connect()(KegControl)

KegControl.propTypes = {
  fullListOfBrews:PropTypes.object
}
const mapStateToProps = (state) => {
  return {
    fullListofBrews: state}
}
export default KegControl;
