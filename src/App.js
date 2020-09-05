import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './Components/Posts/Posts';
import Post from './Components/Post/Post';
import Header from './Components/Header/Header';
import NotMatched from './Components/NotMatched/NotMatched';

function App() {
  return (
    <div>

      <Router>
        <Header></Header>
        <Switch>
          <Route path='/posts'>
            <Posts></Posts>
          </Route>
          <Route path='/post/:post'>
            <Post></Post>
          </Route>
          <Route exact path='/'>
            <Posts></Posts>
          </Route>
          <Route path='*'>
            <NotMatched></NotMatched>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
