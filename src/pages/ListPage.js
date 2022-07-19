import React from 'react';
import classes from'./ListPage.module.css'
import Navbar from '../components/Navbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



const ListPage = () => {
    return(
        
        <div >
            <Navbar/>
            <div className={classes.liststyle} >

            <Table striped bordered hover variant="dark-light">
                    <thead>
                        <tr>
                        <th class="col-md-1">Lista samochodów</th>
                        <th colSpan={6}> </th>
                                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>id</th>
                        <th>Nazwa</th>
                        <th>Producent</th>
                        <th>Data produkcji</th>
                        <th>Typ nadwozia</th>
                        <th>Typ skrzyni</th>
                        <th>Ilość miejsc</th>
                        <th><Button variant="danger">Usuń</Button>{' '}</th>
                        </tr>
                    </tbody>
                    
                    <tbody>
                        <tr>
                        <th>1</th>
                        <th>Maluszek</th>
                        <th>Fiat</th>
                        <th>21-03-2022</th>
                        <th>SUV</th>
                        <th>AUTO</th>
                        <th>4</th>
                        <th><Button variant="danger">Usuń</Button>{' '}</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <th>2</th>
                        <th>Maluszek</th>
                        <th>Fiat</th>
                        <th>21-03-2022</th>
                        <th>SUV</th>
                        <th>AUTO</th>
                        <th>4</th>
                        <th><Button variant="danger">Usuń</Button>{' '}</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <th>3</th>
                        <th>Maluszek</th>
                        <th>Fiat</th>
                        <th>21-03-2022</th>
                        <th>SUV</th>
                        <th>AUTO</th>
                        <th>4</th>
                        <th><Button variant="danger">Usuń</Button>{' '}</th>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>4</th>
                        <th>Maluszek</th>
                        <th>Fiat</th>
                        <th>21-03-2022</th>
                        <th>SUV</th>
                        <th>AUTO</th>
                        <th>4</th>
                        <th><Button variant="danger">Usuń</Button>{' '}</th>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>5</th>
                        <th>Maluszek</th>
                        <th>Fiat</th>
                        <th>21-03-2022</th>
                        <th>SUV</th>
                        <th>AUTO</th>
                        <th>4</th>
                        <th><Button variant="danger">Usuń</Button>{' '}</th>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>6</th>
                        <th>Maluszek</th>
                        <th>Fiat</th>
                        <th>21-03-2022</th>
                        <th>SUV</th>
                        <th>AUTO</th>
                        <th>4</th>
                        <th><Button variant="danger">Usuń</Button>{' '}</th>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>7</th>
                        <th>Maluszek</th>
                        <th>Fiat</th>
                        <th>21-03-2022</th>
                        <th>SUV</th>
                        <th>AUTO</th>
                        <th>4</th>
                        <th><Button variant="danger">Usuń</Button>{' '}</th>
                        </tr>
                    </tbody>
            </Table>
            </div>
            
            
        </div>
       
    )
}




export default ListPage;