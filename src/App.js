import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './router/Routes';
import Home from './components/pages/Home'
import UserAnswer from './components/pages/UserAnswer'
import ViewMyAns from './components/pages/ViewMyAns'
import NewFriend from './components/NewFriend'
import FriendAnsQuiz from './components/pages/FriendAnsQuiz'
import ViewFriendsAns from './components/pages/ViewFriendsAns'
import './app.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={Routes.home} exact component={Home} />
          <Route path={Routes.userAnswer} exact component={UserAnswer} />
          <Route path={Routes.viewMyAnswers} exact component={ViewMyAns} />
          <Route path={Routes.newFriend} exact component={NewFriend} />
          <Route path={Routes.friendAnswer} exact component={FriendAnsQuiz} />
          <Route path={Routes.viewFriendsAns} exact component={ViewFriendsAns} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
