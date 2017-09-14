import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import consumptions from '../data/consumptions';
import Detail from './Detail';

export default class consumptionInfo extends Component {

  render() {

    const {ordernum} = this.props.match.params;

    let info = consumptions.map((item) => {

      if(item.orderNumber === ordernum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large" to="/consumptions">Return</Link>
        {info}
      </div>
    );
  }
}
