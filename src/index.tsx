import React from 'react';
import ReactDOM from 'react-dom';
import { Contact, Dashboard, Home, Resume } from './components';
import './styles.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';  //<-------need to fix?
// import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={'Hello World'}/>
        </Route>

        <Route path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>

        <Route path='/Contact'>
          <Contact></Contact>
        </Route>

        <Route path='/resume'>
          <Resume title={''}></Resume>
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();