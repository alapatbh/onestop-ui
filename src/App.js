import React from 'react';
import './App.scss';
import './assets/style.css'
// import RegisterUser from './Pages/register'
import SignIn from './Pages/signin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStopCircle} from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <React.Fragment>
      <div className="header">One<span style={{color:"red"}}>Stop<FontAwesomeIcon icon={faStopCircle}/></span></div>
      {/* <RegisterUser /> */}
      <SignIn />

    </React.Fragment>
  );
}

export default App;
