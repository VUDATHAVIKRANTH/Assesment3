import React from 'react';
import Data from './data/Data.json';
import logo from './logo.svg';
import './bootstrap/css/bootstrap.min.css';
import {BrowserRouter,Route,Link} from'react-router-dom';
import Resume from './Resume.js';
 class Main extends React.Component {
     render(){
         return(
             <BrowserRouter>
             <Route exact path="/Resume" component={Resume}/>
             <Route exact path="/" component={Main1}/>

             </BrowserRouter>

             
         )
     }
 
    }
 function Main1()
 {
    return(
        <div className='row'>
            <div className='card col-md-4 offset-4 mt-4'>
                <img className='card-img-top' src={logo}/>
                <h1>{Data.detials.email}</h1>
                <Link to="/Resume" className="btn-primary">Click</Link> 
            </div>
        </div>
    )
 }
 export default Main