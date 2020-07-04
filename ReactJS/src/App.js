import React from 'react';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Page1} />
            <Route exact path='/page2' component={Page2} />
            <Route path='/:userId' component={Page3} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
