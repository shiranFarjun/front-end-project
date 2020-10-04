import React from 'react';
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './router/Routes';
import Kettering from './components/Suppliers/Kettering/Kettering';
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Switch>
            <Route path={Routes.management} exact component={Kettering}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
