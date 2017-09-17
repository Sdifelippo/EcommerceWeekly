import React from 'react';

const Contact = () => {

  let listStyle = {
    textAlign: "left",
    fontSize: 35,
    paddingLeft: 0,
    listStyle: "none"
  };

  let contactStyle = {
    color: "red",
    fontSize:".8em"
  };

  return(
    <div className="container" style={{marginTop:100, textAlign:"center"}}>
      <h1>Contact <span style={{fontFamily: "Times", color:"#C1C2C7", fontSize:"1.7em"}}> Hurricane Start</span> At</h1>
      <br/>
      <ul className="col-4 offset-5" style={listStyle}>
        <li className="fa fa-envelope" aria-hidden="true"style={contactStyle}></li>
        <li>hurricaneStart@gmail.com</li>
        <br/>
        <li className="fa fa-phone" aria-hidden="true" style={contactStyle}></li>
        <li>800-646-4321</li>
        <br/>
        <li className="fa fa-home" aria-hidden="true" color="blue" style={contactStyle}></li>
        <li>300 Spartan St</li>
        <li>Bronx, NY 37067</li>
      </ul>
    </div>

  );
};

export default Contact;
