import React from 'react';
import './App.css';
import Home from './components/Users/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom"; 
import NotFound from './NotFound/NotFound';
import UserDetail from './components/UserDetail/UserDetail';
import Comments from './components/Comments/Comments';
 
 

function App() {
  return (
 <div className="main">
      <Router>
        <Switch>
          <Route exact path ="/">
          <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/user/:userId">
            <UserDetail />
          </Route>
          <Route path="/comment/:postId">
           <Comments />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
 </div>
  );
}

export default App;
