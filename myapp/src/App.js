// import logo from './logo.svg';
// import './App.css';
// import React from 'react';

//STATE METHOD
// import Newcomp from "./Components/Newcomp";

// class App extends React.Component{
//   styles={
//     fontStyle: "bold",
//     color: "teal"
//   };
//   render(){
//     return (
//     <div className="App">
//       <h1 style={this.styles}>hey</h1>
//       <Newcomp />
//     </div>
//     )
//   }
// }

// export default App;

//props for class component

// import './App.css';
// import React from 'react';
// import Classprop from "./Classprop";
//props for functional component

// import Functionalprop from "./Functionalprop";
// class App extends React.Component{
//   render(){
//     return (
//       <div>
//             <Classprop name="mrun" place="mumbai">child comp</Classprop>
//             <Classprop name="mrunmayi"> <button>click</button></Classprop>
//             <Classprop name="mrunu" />
//             {/* <Functionalprop name="learner" place="india"></Functionalprop> */}
//       </div>
//     )
//   }
// }

// export default App;

//react forms
// import React from 'react';
// import Form from './Components/Form';
// class App extends React.Component{
//     render() {
//         return (
//             <div className="App">
//                 <Form />
//             </div>
//         );
//     }
// }

// export default App;


//reate hooks usestate
// import React, { useState, useEffect} from 'react';
// import './App.css';
// const App = () => {
//     const [count, setCount] = useState(0);

//     const hello = () => {    
//             // alert('Hello World');
//             document.write('Hello')
//     }
//     return (
//         <div className='App'>
//         {count}
//         <button onClick={() => setCount(count + 1)}>increment</button>
//         <button onClick={() => setCount(count - 1)}>decrement</button>
//         <button onClick={hello}>click</button> 
//         </div>
//     );
// };

// export default App;

//react hooks useeffect
// import React, { useState, useEffect} from 'react';
// import './App.css';
// const App = () => {
//     const [count, setCount] = useState(0);
//     const [secondcount, setSecondcount] = useState(1);
//     useEffect(() => {
//         setCount(count +1);
//     }, [secondcount]);

//     return(
//         <div className="App">
//             {count} - {secondcount}
//             <button onClick={() => setSecondcount(secondcount +1)}>second count</button>
//         </div>
//     )
// }
// export default App;

//react hooks show and hide comp using hookscomp.js
// import React, { useState} from 'react';
// import './App.css';
// import Hookscomp from './Hookscomp';
// const App = () => { 
//     const [showComp, setshowComp] = useState(true)
//     return(
//         <div className="App">
//             <button onClick={() => setshowComp(true)}>show comp</button>
            
//             <button onClick={() => setshowComp(false)}>hide comp</button>
//             { showComp && <Hookscomp />}
//         </div>
//     )
// }
// export default App;


//react router
// import React from 'react';
// import Functionalprop from './Functionalprop';
// import Classprop from './Classprop';
// import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
//     class App extends React.Component{ 
//     render() {
//         return(
//             <Router>
//             <div>
//                 <Switch>
//                     <Route exact path='/'>
//                     <Functionalprop />
//                     </Route>
//                     <Route path='/Classprop'>
//                     <Classprop />
//                     </Route>
//                 </Switch>
//             </div>
//             </Router>
//         )
//     }
// }

// export default App;


//react form in hooks
// import React, {useState} from 'react';


// export default function App() {
//     // const {register, handlesubmit} = useForm();
//     const [values, setValue] = useState({
//         username:"",
//         email:"",
//         password: ""
//     });
     
//     const [submit, setsubmit] = useState(false);

//     const handleusername = (event) => {
//         setValue({...values, username: event.target.value})
//     }

//     const handleemail = (event) => {
//         setValue({...values, email: event.target.value})
//     }

//     const handlepassword = (event) => {
//         setValue({...values, password: event.target.value})
//     }

//     const handlesubmit = (event) => {
//         setsubmit(true);
//     }
//     return(
      
//         <form onSubmit={handlesubmit}>
//             {submit ? <div>Success</div>: null }
            
//             <label>Name</label>
//             <input type='name' value={values.username} onChange={handleusername}></input>
//             <label>email</label>
//             <input type='email' value={values.email} onChange={handleemail}></input>
//             <label>password</label>
//             <input type='password' value={values.password} onChange={handlepassword}></input>
//             <input type="submit"></input>
            
//         </form>
       
//     )
// }

