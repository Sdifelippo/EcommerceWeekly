import React from 'react';

const Detail = (props) => {

  let detail = props.data;

  return(
    <div className="col-sm-6">
      <div className="card " style={{marginTop: 20}}>
        <div className="card-block">
          <img className="card-image-top" src={detail.image} style={{width:"250px", float:"right", height:"250px"}} />
          <h4 className="card-title">{detail.name}</h4>
          <p className="card-text">Order-Number: {detail.orderNumber}</p>
          <ul className="list-group list-group">
            <li className="list-group-item">Price: {detail.price}</li>
            <li className="list-group-item text-left">{detail.details}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
