import React, { useState } from 'react';
import {  Row, Col, Form, Button } from 'react-bootstrap';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import Settings from '../../settings'
import LogoDiv from '../../components/logo'
import '../../assets/css/signIn.scss'

export default (props) => {

    let poolData = {
        UserPoolId : Settings.getCognitoUserPoolId(),
        ClientId : Settings.getCognitoUserPoolClientId()
    };

    let formDetails ={
        email: {
            value: '',
            error: ''
        },
        password: {
            value: '',
            error: ''
        },
        confirmPassword: {
            value: '',
            error: ''
        }
    }

    const [registerForm, setRegisterForm] = useState(formDetails);
    const [regiterUser, setRegisterUser] = useState(true)
    const [confirmationCode, setConfirmationCode] = useState('');
    
    const handleInput = (e, item) => {
        let temp = {...registerForm};
        temp[item].value= e.target.value;
        setRegisterForm(temp);
    }

    const handleConfirm = () => {

    let userName = registerForm.email.value
    let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    let userData = {
        Username : userName,
        Pool : userPool
    };

    let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
        if (err) {
            alert(err.message);
            return;
        }
        alert("confimation successfull");
    });
    }

    const handleSave = () => {

      var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  
      var attributeList = [];
  
      var email = registerForm.email.value;
      var pw = registerForm.password.value;
      var confirmPw = registerForm.confirmPassword.value;
      var dataEmail = {
          Name : 'email',
          Value : email
      };
  
      var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
  
      attributeList.push(attributeEmail);
  
      if (pw === confirmPw) {
        userPool.signUp(email, pw, attributeList, null, (err, result)=>{
            if (err) {
                alert(err.message);
                return;
            }
            setRegisterUser(false);
        });
      } else {
        alert('Passwords do not match.')
      }
    }

    const handleShowLoginPage = () => {
        props.onShowLogin && typeof props.onShowLogin == 'function' &&  props.onShowLogin()
    }

    return (
    <React.Fragment>
        <LogoDiv/>
        <div className="registerConfirm">
            <Row className="registerUser">
                {regiterUser ? <Col>
                    <Row>
                        <Col className="registerHeading">
                            Awesomeness starts here <br></br>&nbsp;
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row><Col className="labelFont">Email</Col></Row>
                            <Row><Col><Form.Control type="text" value={registerForm.email.value} onChange={(e)=>handleInput(e, 'email')}/></Col></Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row><Col className="labelFont">Password</Col></Row>
                            <Row><Col><Form.Control type="password" value={registerForm.password.value} onChange={(e)=>handleInput(e, 'password')} /></Col></Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Row><Col className="labelFont">Confirm Password</Col></Row>
                        <Row><Col><Form.Control type="password" value={registerForm.confirmPassword.value} onChange={(e)=>handleInput(e, 'confirmPassword')}/></Col></Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{textAlign: "center"}}><br></br><Button style={{width:"60%"}} onClick={handleSave} > Register </Button></Col>                    
                    </Row>
                    <Row>
                        <Col style={{textAlign: "center"}}><br></br>Already on Onestop? <span onClick={handleShowLoginPage} className="signInSpan">Sign in</span></Col>                    
                    </Row>
                </Col>:
                <Col>
                    <Row>
                        <Col>
                            Confirmation Code
                        </Col>
                        <Col>
                            <Form.Control type="text" value={confirmationCode} onChange = {({target})=>setConfirmationCode(target.value)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{textAlign: "center"}}><Button variant="success" onClick={handleConfirm}>Confirm</Button></Col>
                    </Row>
                </Col>}
            </Row>
        </div>
    </React.Fragment>)
}