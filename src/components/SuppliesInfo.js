import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import supplies from '../data/supplies';
import Detail from './Detail';

 class SuppliesInfo extends Component {

  render() {

    const {ordernum} = this.props.match.params;

    let suppliesInfo = supplies.map((item) => {

      if(item.orderNumber === ordernum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large" to="/supplies">Return</Link>
        {suppliesInfo}
      </div>
    );
  }
}

export default SuppliesInfo;
