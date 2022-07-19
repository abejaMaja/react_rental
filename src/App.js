import React from 'react';
import Home from './components/Home';
import classes from'./App.module.css'
import ListPage from './pages/ListPage';
import FormPage from './pages/FormPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className={classes.bodyhome}>  
    <Router>
      
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/list" element={<ListPage />} />
         <Route exact path="/form" element={<FormPage />} />
     
     
      </Routes>
   
     
       
    </Router>
    </div>
  )
}

export default App;
