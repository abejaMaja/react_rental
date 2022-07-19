import React from 'react';
import classes from'./Home.module.css'
import Navbar from './Navbar';


const Home = () => {
    return(
        <div>
         <Navbar/>
          <div >
            <div className={classes.introtext}>
                <h2>Dzień dobry</h2>
                <br/>
                <h4>Witamy na naszej stronie</h4>
            </div>
            
          </div>
        </div>
    )
}




export default Home;