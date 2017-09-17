import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './BaseLayout';
import consumptionInfo from './consumptionInfo';
import Consumptions from './Consumptions';
import SuppliesInfo from './SuppliesInfo';
import Supplies from './Supplies';
import About from './About';
import Contact from './Contact';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/consumptions/:ordernum" component={consumptionInfo}/>
            <Route path="/consumptions" component={Consumptions}/>
            <Route path="/supplies/:ordernum" component={SuppliesInfo}/>
            <Route path="/supplies" component={Supplies}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
