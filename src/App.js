import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './router/Routes';
import Home from './components/pages/Home'
import UserAnswer from './components/pages/UserAnswer'
import './app.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={Routes.home} exact component={Home} />
          <Route path={Routes.userAnswer} exact component={UserAnswer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <Route path={Routes.signUp} exact render={(props) => <SignUp handleChange={handleChange} data={data}  {...props} />} />
// <Route path={Routes.location} exact component={Location} />
// <Route path={Routes.design} exact component={Design} />
// <Route path={Routes.catering} exact component={Catering} />
// <Route path={Routes.AboutUs} exact component={AboutUs} />
// <Route path={Routes.viewLocation} exact component={ViewLocation} />
