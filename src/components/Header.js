import React from "react";

function Header() {
  const name = "The Brewpub"
  const myStyle={
    fontFamily: 'Alfa Slab One'

  }
  return(
    <React.Fragment>
        <br></br>
        <div className="content-center w-80 p-8 text-white bg-purple-600 rounded-md shadow-lg">
          <h3 style={myStyle}>{name}</h3>
        </div>
    </React.Fragment>
  );
}

export default Header;