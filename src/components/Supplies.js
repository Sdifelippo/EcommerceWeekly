import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import supplies from "../data/supplies.js";

class Supplies extends Component {
  render() {

    let match = this.props.match;

    let navSupplies = supplies.map((supplies) => {
      return(
        <div key={supplies.id} className="col-sm-4">
          <div className="card" style={{marginTop: 20}}>
            <img className="card-image-top" src={supplies.image} style={{width: "150px", margin:"auto"}} />

            <div className="card-block">
                <h4 className="card-title">{supplies.name}</h4>
                <p className="card-text">Order-Number: {supplies.orderNumber}</p>
                <p className="card-text" style={{color:"blue", fontSize:"1.3em"}}>{supplies.price}</p>
            </div>
            <div className="card-footer">
              <Link to={`${match.url}/${supplies.orderNumber}`}>Product Details</Link>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="card-deck-wrapper" style={{marginLeft: 25, marginRight: 25, marginTop: 70, marginBottom: 100}}>
        <div className="card-deck">
          {navSupplies}
        </div>
      </div>
    );
  }
}

export default Supplies;
