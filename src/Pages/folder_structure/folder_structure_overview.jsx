import React, { useState } from 'react'
import { Row, Col, Container, ListGroup, ListGroupItem, Form } from 'react-bootstrap'
import "../../assets/css/folderstructure.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faFolderOpen, faSave, faWindowClose, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import icons from "../../utils/icons"

export default props => {

    const [showAddFolder, setShowAddFolder] = useState([false, false])
    const [folderData, setFolderData] = useState([
        {
            name: "Java",
            type: "folder",
            order: 1,
            data: {}
        },
        {
            name: "React",
            type: "folder",
            order: 2,
            data: {}
        }
    ])

    const handleAddFolder = (col, type = true) => {
        let temp = [...showAddFolder];
        col = parseInt(col)
        temp[col] = type;
        setShowAddFolder(temp)
    }
    
    const AddFolder = props => <div onClick={()=>handleAddFolder(props.column)} className="add-material-div">
        Add <FontAwesomeIcon icon={faFolderPlus}/>
    </div>

    const OpenFolder = props => <div className="add-material-div">
        Open <FontAwesomeIcon icon ={faFolderOpen}/>
    </div>

    const AddFolderInputItem = props=>{

        return <ListGroupItem className="add-folder-list">
        <Container>
            <Row>
                <Col sm={6} lg={8}>
                    <Form.Group>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
                <Col sm={6} lg={4} style={{textAlign: "center"}}>
                    <FontAwesomeIcon className="saveFolder" icon={faSave}/> &nbsp;
                    <FontAwesomeIcon className="cancelSaveFolder" onClick={()=>handleAddFolder(props.column, false)} icon={faWindowClose}/>
                </Col>
            </Row>
        </Container>
    </ListGroupItem>
    }

    return (
        <Container fluid>
            <Row className="main-folder-structure-row">
                <Col>
                    <div className="each-main-col">
                        <ListGroup>
                            {folderData.map((each, idx) => <ListGroupItem key={idx}>
                                <FontAwesomeIcon icon={icons.blueprint[each.type]}/> {each.name}
                                <FontAwesomeIcon className="next-col-icon" icon={faArrowRight}/>
                            </ListGroupItem>)}
                            {showAddFolder[0] && <AddFolderInputItem column="0"/>}
                        </ListGroup>
                    </div>
                    <AddFolder column="0"/>
                </Col>
                <Col>
                    <div className="each-main-col">
                        <ListGroup>
                            {showAddFolder[1] && <AddFolderInputItem column="1"/>}
                        </ListGroup>
                    </div>
                    <AddFolder column="1"/>
                </Col>
                <Col>
                    <div className="each-main-col">

                    </div>
                    <OpenFolder/>
                </Col>
            </Row>
        </Container>
    )
}