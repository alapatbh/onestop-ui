import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStopCircle} from "@fortawesome/free-regular-svg-icons";

export default props => {

    return <React.Fragment>
        <div className="header">One<span style={{color:"red"}}>Stop<FontAwesomeIcon icon={faStopCircle}/></span></div>
    </React.Fragment>
}

export const Logo = () => (
    <React.Fragment>
        <div className="onlyLogo">One<span style={{color:"red"}}>Stop<FontAwesomeIcon icon={faStopCircle}/></span></div>
    </React.Fragment>
)