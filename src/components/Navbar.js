import React from 'react';
import classes from'./Navbar.module.css'
import{HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
    return(
        <div>
            <div className={classes.topbar}></div>
            <div className={classes.sidebar}>
                
                <div className={classes.logo}>LOGO</div>
                <div className={classes.title}>Wypożyczalnia</div>
               
                <div className={classes.acomponent}>
                    <a href ="/" >Strona główna</a>
                </div>
                <div className={classes.acomponent}>
                    <Link to = "/list">Lista Samochodów</Link>
                </div>
                <div className={classes.acomponent}>
                    <a href ="/form">Formularz dodawania samochodów</a>
                </div>

               
                    
           
                
            </div>
             <div className={classes.topbar}></div>
        </div>
    )
}




export default Navbar;