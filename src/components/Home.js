import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div style={{marginTop: 75, textAlign:"center"}}>
        <h1><span style={{fontFamily: "Arial", color:"blue", fontSize:"4em"}}>Hurricane Start</span></h1>
        <br/>
        <h3>The first stop in Hurricane prep products</h3>
        <br/>
        <img src={require('../img/hurricaneimage.jpg')} style={{width:"90%"}}/>
      </div>
    );
  }
}

export default Home;
