
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import services from '../data/services';
import Detail from './Detail';

 class ServiceInfo extends Component {

  render() {

    const {ordernum} = this.props.match.params;

    let serviceInfo  = services.map((item) => {

      if(item.orderNumber === ordernum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large" to="/services">Return</Link>
        {serviceInfo}
      </div>
    );
  }
}

export default ServiceInfo;
