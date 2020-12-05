import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props) {
  return(
    <React.Fragment>
      {Object.values(props.KegList).map((keg) => 
      <Keg 
        whenKegClicked = {props.onBrewSelection}
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

KegList.propTypes = {
  KegList: PropTypes.object,
  onBrewSelection: PropTypes.func
}
export default KegList;