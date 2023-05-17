import { useState } from 'react';
import '../css/styles.css';
import Modal from 'react-bootstrap/Modal';
import {BsPersonCircle} from 'react-icons/bs';

export default function Contact() {
    
    const [logContact, setLogContact] = useState(true)
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setLogContact(breakpoint);
        setShow(true)
    }
    return (
        <>
            <BsPersonCircle class='tool-items'  onClick={handleShow}/>
            <Modal show={show} fullscreen={logContact} onHide={() => setShow(false)} id="info-screen">
                <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        </>
    )
}