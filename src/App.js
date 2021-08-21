import React from 'react';
import './App.css';
import './dist/style.css'
import { Switch,Route } from 'react-router-dom'
import Home from './Components/Home';
import Gruppi from './Components/Gruppi'
import Main from './Components/Main';
import Commesse from './Components/Commesse';
import Attivita from './Components/Attivita'
import Sedi from'./Components/Sedi';
import Sondaggio from './Components/Sondaggio';
function App() {
  return (
  <>
<Switch>
      <Route exact component={Main} path="/"/>
      <Route exact component={Home} path="/Home"/>
      <Route exact component={Gruppi} path="/Gruppi"/>
      <Route exact component={Commesse} path="/Commesse"/>
      <Route exact component={Attivita} path="/Attivita"/>
      <Route exact component={Sedi} path="/Sedi"/>
      <Route exact component={Sondaggio} path="/Sondaggio"/>
</Switch>  
</>
  );
}

export default App;
