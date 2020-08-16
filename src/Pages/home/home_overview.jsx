import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "../../assets/css/home.scss"
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => {
    return <React.Fragment>
        <div className="homeOverview">
            <Row>
                <Col xs={3} className="profile-col">
                    <div className="profile-col-inner">
                        <div><FontAwesomeIcon icon={faUserCircle}/></div>
                    </div>
                </Col>
                <Col xs={7} className="feed-col">
                    <div className="feed-col-inner"> Coming  Soon!</div>
                </Col>
                <Col xs={2}>
                    
                </Col>
            </Row>
        </div>
    </React.Fragment>
}