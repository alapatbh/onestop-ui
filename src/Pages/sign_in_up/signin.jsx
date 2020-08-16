import React, { useState } from 'react';
import {  Row, Col, Form, Button } from 'react-bootstrap';
import '../../assets/css/signIn.scss'
import {login as loginUtility} from './utility'
import LogoDiv from '../../components/logo'

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

    const loginUser = () => {
       loginUtility(signInForm.signIn.value, signInForm.password.value);
    }

    const handleCreateAccount = () => {
        props.onShowRegister && typeof props.onShowRegister == 'function' && props.onShowRegister()
    }
  

    const EmptyRow = () => <Row>
        <Col>&nbsp;</Col>
    </Row>

    return (
        <React.Fragment>
            <LogoDiv/>
            <div className="signIn container">
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
                            <Col className="signIn-Button-Col"><Button style={{fontWeight: "bold"}} className="w-100 h-100" onClick={loginUser} variant="primary" >Sign In</Button></Col>
                        </Row>
                        <Row>
                            <Col className="forgottenPassword">Forgotten password?</Col>
                        </Row>
                        <Row>
                            <Col><hr></hr></Col>
                        </Row>
                        <Row>
                            <Col className="signIn-Button-Col">
                                <Button style={{fontWeight: "bold"}} className="w-100 h-100" variant="success" onClick={handleCreateAccount}>Create Account</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    </React.Fragment>)
}