import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function kegList(props) {
  return(
    <React.Fragment>
      {props.kegList.map((keg) => 
      <Keg whenKegClicked = {props.onBrewSelection}
          name={keg.name}
          brand = {keg.brand}
          price = {keg.price}
          abv = {keg.abv}
          id = {keg.id}
          key ={keg.id}
          fluidOunces ={keg.fluidOunces}/>
      )}
    </React.Fragment>
  );
}

kegList.propTypes = {
  kegList: PropTypes.array,
  onBrewSelection: PropTypes.func
}
export default kegList;