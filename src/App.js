import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './router/Routes';
import Home from './components/pages/Home'
import UserAnswer from './components/pages/UserAnswer'
import ViewMyAns from './components/ViewMyAns'

import './app.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={Routes.home} exact component={Home} />
          <Route path={Routes.userAnswer} exact component={UserAnswer} />
          <Route path={Routes.viewMyAnswers} exact component={ViewMyAns} />
          <Route path={Routes.} exact component={} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
