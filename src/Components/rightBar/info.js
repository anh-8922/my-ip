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
                <Modal.Title>About Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>IP Generator</h3>
                    <p>Our project is a dynamic and interactive application that leverages 
                        the power of APIs to fetch location IP data and present it in a visually 
                        appealing manner on a website. <br/>
                        The main objective of this project is to provide users with accurate and 
                        real-time information about the geographical location associated with an 
                        IP address. This includes details such as the country, region, city, 
                        latitude, longitude, and even additional data points like time zone.</p>
                    <h3>Technical:</h3>
                    <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>Library: React</li>
                        <li>Framework: Bootstrap</li>
                        <li>Additional:
                            <ol>
                                <li>EmailJS</li>
                            </ol>
                        </li>
                    </ul>
                    
                    <div>
                        <h3>Author:</h3>
                        <p>Anh Chau <a href='https://github.com/anh-8922' target='_blank'>GitHub</a></p>
                        <p>Lakmali Ranatunga <a href='https://github.com/lranatunga' target='_blank'>GitHub</a></p>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}