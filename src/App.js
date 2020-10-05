import React from 'react';
// import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './router/Routes';
import CateringFood from './components/Suppliers/Kettering/CateringFood';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Switch>
            <Route path={Routes.management} exact component={CateringFood}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
