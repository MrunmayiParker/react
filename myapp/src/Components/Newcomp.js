// import './App.css';
// import React, { Component } from 'react';


// class Newcomp extends Component{
// constructor(props){
//     super(props);
//     this.state={
//         message: "bruh",
//         sub:"click here"
//     };
// }


// btnchange = () => {
//    this.setState({
//     message:"we clicked",
//     sub: "clicked"
//    });
// };

//   render(){
//     return (
//     <div className="App">
//         <h2>{this.state.message}</h2>
//         <button onClick={this.btnchange}>{this.state.sub}</button>
//     </div>
//     );
//   }
// }

// export default Newcomp;

import React, { Component } from 'react';
class Newcomp extends Component{
 

    constructor(props){
      super(props);
      this.state = {
        message:"",
        sub: "click me"
      };
    }

    btnchange = () => { 
      this.setState ({
        message:"hello world",
        sub:"click me"  
      });
    };


  render(){
    return(
      <div className="App">
        <h2>{this.state.message}</h2>
        <button onClick={this.btnchange}>{this.state.sub}</button>
      </div>
    );
  }
}

export default Newcomp;