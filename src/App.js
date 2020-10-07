import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './router/Routes';
// import CateringFood from './components/Suppliers/Kettering/CateringFood';
// import Map from './components/map/Map'
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import Location from './components/pages/Location'
import Design from './components/pages/Design'
import Catering from './components/pages/Catering'
import './app.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={Routes.home} exact component={Home} />
          <Route path={Routes.signUp} exact component={SignUp} />
          <Route path={Routes.location} exact component={Location} />
          <Route path={Routes.design} exact component={Design} />
          <Route path={Routes.catering} exact component={Catering} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


// <Route path={Routes.management} exact component={CateringFood} />
// <Route path={Routes.map} exact component={Map} />