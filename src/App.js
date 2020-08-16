import React, { useState } from 'react';
import './App.scss';
import './assets/style.css'
import RegisterUser from './Pages/sign_in_up/register'
import SignIn from './Pages/sign_in_up/signin'
import Settings, {getAuthToken} from './settings'
import Routes from './routes'
import Navigation from './components/navigation'

const token = getAuthToken();
const authenticated = token ? true : false;

function App() {

  sessionStorage.setItem( Settings.getRequestedURLName(), window.location.href);
  const [showLogin, setShowLogin] = useState(true);

  const hadleShowRegisterPage = () => {
    setShowLogin(false)
  }

  const hadleShowLoginPage = () => {
    setShowLogin(true);
  }

  return (
    <React.Fragment>
      {!authenticated ? showLogin ? <SignIn onShowRegister= {hadleShowRegisterPage}/> : <RegisterUser onShowLogin= {hadleShowLoginPage}/> 
      :<React.Fragment>
        <Navigation/>
        <Routes/>
      </React.Fragment>
      }
    </React.Fragment>
  );
}

export default App;
