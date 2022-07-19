import React from 'react';
import classes from'./FormPage.module.css'
import Navbar from '../components/Navbar';


const FormPage = () => {
    return(
        
        <div >
            <Navbar/>
            <div className={classes.blankblock}></div>
            <div className={classes.formstyle}>
                <h3>Formularz wynajmu</h3>
                <br/>
                <form >
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Imię klienta</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword" placeholder="Podaj imię klienta"/>
                        </div>
                    
                    </div>             
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Nazwisko klienta</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword" placeholder="Podaj nazwisko klienta"/>
                        </div>
                        
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Identyfikator pojazdu</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword" placeholder="Identyfikator pojazdu"/>
                        </div>
                        
                    </div>
                  
                    
                </form>
                <div className={classes.buttonpos}>
                        <button type="submit" class="btn btn-primary">Zatwierdź</button>
                </div>

            </div>
           
            
              
            
          
        
        </div>
       
       )
   }
   
   
   
   
   export default FormPage;