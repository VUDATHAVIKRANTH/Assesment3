import React from 'react';
import Data from './data/Data.json';
import './bootstrap/css/bootstrap.min.css'
import logo from './logo.svg';

function Home(){
console.log(Data);
return (
<div className="row">
        <div className="card" >
            <img src={logo} className="card-img-top"/>
                <div>
                <h1>Profile</h1>
<h1>{Data.detials.email}</h1>
                </div>
        </div>
</div> )
}
export default Home;