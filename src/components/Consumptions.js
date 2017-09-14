import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import consumptions from "../data/consumptions.js";

class Consumptions extends Component {
  render() {

    let match = this.props.match;

    let navConsumptions = consumptions.map((consumptions) => {
      return(
        <div key={consumptions.id} className="col-sm-4">
          <div className="card" style={{marginTop: 20}}>
            <img className="card-image-top" src={consumptions.image} alt={consumptions.imageAlt} style={{width:"150px", margin:"auto"}} />

            <div className="card-block">
              <h4 className="card-title">{consumptions.name}</h4>
              <p className="card-text">Order-Number:{consumptions.orderNumber}</p>
              <p className="card-text" style={{color:"blue", fontSize:"1.3em"}}>{consumptions.price}</p>
            </div>
            <div className="card-footer">
              <Link to={`${match.url}/${consumptions.orderNumber}`}>Product Details</Link>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="card-deck-wrapper" style={{marginLeft: 25, marginRight: 25 , marginTop: 70, marginBottom: 100}}>
        <div className="card-deck">
            {navConsumptions}
        </div>
      </div>
    );
  }
}

export default Consumptions;
