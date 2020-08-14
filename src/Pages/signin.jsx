import React, { useState } from 'react';
import {  Row, Col, Form, Button } from 'react-bootstrap';
// import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import '../assets/css/signIn.scss'
// import AWS from 'aws-sdk';

export default (props) => {

    let formDetails ={
        signIn: {
            value: '',
            error: false
        },
        password: {
            value: '',
            error: false
        }
    }

    const [signInForm, setSignInForm] = useState({...formDetails});

    const handleOnChange = ({target}, item) => {
        let temp = {...signInForm};
        temp[item].value = target.value;
        setSignInForm(temp)
    }

    // function loginUser() {

    //     var userPoolId = localStorage.getItem('userPoolId');
    //     var clientId = localStorage.getItem('clientId');
    //     var identityPoolId = localStorage.getItem('identityPoolId');
    //     var loginPrefix = localStorage.getItem('loginPrefix');
  
    //     var poolData = {
    //       UserPoolId : userPoolId, // Your user pool id here
    //       ClientId : clientId // Your client id here
    //     };
    //     var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  
    //     var email = signInForm.signIn.value;
    //     var pwd = signInForm.password.value;
  
    //     var authenticationData =
    //     {
    //       'UserName': email,
    //       'Password': pwd
    //     }
    //     var userData = {
    //       Username : email,
    //       Pool : userPool
    //     };
  
    //     var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    //     var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    //     cognitoUser.authenticateUser(authenticationDetails, {
    //       onSuccess: function (result) {
    //         console.log('access token + \n' + result.getAccessToken().getJwtToken());
  
    //         var sessionTokens =
    //         {
    //           IdToken: result.getIdToken(),
    //           AccessToken: result.getAccessToken(),
    //           RefreshToken: result.getRefreshToken()
    //         };
    //         localStorage.setItem('sessionTokens', JSON.stringify(sessionTokens));
  
    //         //POTENTIAL: Region needs to be set if not already set previously elsewhere.
    //         AWS.config.region = 'us-east-1';
    //         AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    //           IdentityPoolId : identityPoolId, // your identity pool id here
    //           Logins : {
    //             // Change the key below according to the specific region your user pool is in.
    //              loginPrefix : sessionTokens.IdToken.jwtToken
    //           }
    //         });
    //         localStorage.setItem('awsConfig', JSON.stringify(AWS.config));
    //         localStorage.setItem('email', email);
  
    //         cognitoUser.getUserAttributes(function(err, result) {
    //           if (err) {
    //               alert(err);
    //               return;
    //           }

    //           for (let i = 0; i < result.length; i++) {
    //               console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
    //               if (result[i].getName() == 'sub') {
    //                 console.log('Overwriting userId into local storage');
    //                 localStorage.setItem('userId', result[i].getValue());
    //               }
    //           }
    //         });
  
    //         // loggedInDisplay();
    //       },
  
    //       onFailure: function(err) {
    //         alert(err.message);
    //       },
  
    //     });
    //   }
  

    const EmptyRow = () => <Row>
        <Col>&nbsp;</Col>
    </Row>

    return <div className="signIn container">
        <Row>
            <Col>&nbsp;</Col>
            <Col>
                <div className="signIn-inner-div">
                    <Row>
                        <Col>UserName</Col>
                    </Row>
                    <Row>
                        <Col><Form.Control type="text" value={signInForm.signIn.value} onChange={(evt)=>handleOnChange(evt, "signIn")}/></Col>
                    </Row>
                    <EmptyRow/>
                    <Row>
                        <Col>Password</Col>
                    </Row>
                    <Row>
                        <Col><Form.Control type="password" value={signInForm.password.value} onChange={(evt)=>handleOnChange(evt, "password")}/></Col>
                    </Row>
                    <EmptyRow/>
                    <Row>
                        <Col className="signIn-Button-Col"><Button style={{fontWeight: "bold"}} className="w-100 h-100" variant="primary" >Sign In</Button></Col>
                    </Row>
                    <Row>
                        <Col className="forgottenPassword">Forgotten password?</Col>
                    </Row>
                    <Row>
                        <Col><hr></hr></Col>
                    </Row>
                    <Row>
                        <Col className="signIn-Button-Col">
                            <Button style={{fontWeight: "bold"}} className="w-100 h-100" variant="success">Create Account</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </div>
}