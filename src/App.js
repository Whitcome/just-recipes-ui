import React, { useState, useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Views/Recipes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Views/Login';
import { UserContext } from './context/UserContext';

function App() {
  const context_userId = useContext(UserContext);
  const [userId, setUserId] = useState(context_userId);

  return (
    <div className='App'>
      <Router>
        <Header appName='Just Recipes' userId={userId}></Header>
        <UserContext.Provider value={{ userId, setUserId }}>
          <Switch>
            <Route exact path='/'>
              <p>This is the home page</p>
            </Route>
            <Route path='/about'>
              <p>This is the about page</p>
            </Route>
            <Route path='/recipes'>
              <Recipes />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </UserContext.Provider>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
