import { useState } from 'react';
import '../css/styles.css';
import Modal from 'react-bootstrap/Modal';
import {BsFillInfoCircleFill} from 'react-icons/bs';

export default function Info() {
    
    const [logInfo, setLogInfo] = useState(true)
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setLogInfo(breakpoint);
        setShow(true)
    }
    return (
        <>
            <BsFillInfoCircleFill className="tool-items"  onClick={handleShow}/>
            <Modal show={show} fullscreen={logInfo} onHide={() => setShow(false)} id="contact-screen">
                <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        </>
    )
}