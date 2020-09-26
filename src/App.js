import React, { Component } from 'react';
import {connect} from "react-redux";/* this fuction makes a connection between your component and redux */
class App extends Component {

  
  render() { 
   console.log(this.props)
    return (  
      <div className="App"> 
        <button onClick={this.props.increase}>+</button>
        <div>{this.props.count}</div>
        <button onClick={this.props.decrease}>-</button>
      </div>
    );
  }
}
function mapStateToProps(state/*this state is the state of reducer  */ ){
  return{
    count:state.count /* you return from state what varible  you need from state state  in this component  */
}
}
function mapDispatchToProps(dispatch){
  return{
    increase:()=>dispatch({type:"INCREASE" }),
    decrease:()=>dispatch({type:"DECREASE"})
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(App);