import React from 'react';
import './App.css';
import Result from './Result';
import Form from './Form';
import './Result.css';
import './Form.css';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import {Link} from 'react-router-dom';
function App() {
  return (
    
    <Router>
    <div>
    <Route path='/' exact component={Result}/>
    <Route path='/Form' exact component={Form}/>

    </div>
    </Router>
  );
}

export default App;
