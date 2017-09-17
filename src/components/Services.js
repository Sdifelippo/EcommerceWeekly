import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import services from "../data/services.js";

class Services extends Component {
  render() {

    let match = this.props.match;

    let navServices = services.map((service) => {
      return(
        <div key={service.id} className="col-sm-4">
          <div className="card" style={{marginTop: 20}}>
            <img className="card-image-top" src={service.image} alt={service.imageAlt} style={{width:"150px", margin:"auto"}} />
            <div className="card-block">
              <h3 className="card-title">{service.name}</h3>
              <p className="card-text">Order Number: {service.orderNumber}</p>
              <p className="card-text" style={{color:"blue", fontSize:"1.3em"}}>{service.price}</p>
            </div>
            <div className="card-footer">
              <Link to={`${match.url}/${service.orderNumber}`}>Service Details</Link>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="card-deck-wrapper" style={{ marginTop: 70, marginBottom: 100}}>
        <div className="card-deck">
          {navServices}
        </div>
      </div>
    );
  }
}

export default Services;
