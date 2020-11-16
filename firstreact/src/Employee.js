import React from 'react';


class Employee extends React.Component {

constructor(){
super();
this.state={user:[{name:"vv",age:20},{name:"v2",age:22},{name:"v3",age:23}]
}}


changedata=()=> {
    this.setState({user:[{name:"vv",age:24},{name:"v2",age:25},{name:"v3",age:26}]})
}
render(){
return (
<div>
    <h1>name={this.state.user[0].name} age={this.state.user[0].age}</h1>
    <h1>name={this.state.user[1].name} age={this.state.user[1].age}</h1>
    <h1>name={this.state.user[2].name} age={this.state.user[2].age}</h1>
<button onclick={this.changedata}>upadated</button>
</div>)
}
}



export default Employee;