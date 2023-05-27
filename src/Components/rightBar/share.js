// import { useState } from 'react';
// import '../css/styles.css';
// import Modal from 'react-bootstrap/Modal';
// import {BsFillShareFill} from 'react-icons/bs';
// import { FacebookShareButton, FacebookIcon, LineShareButton, LinkedinIcon } from 'react-share';

// export default function SocialMedia() {
    
//     const [logInfo, setLogInfo] = useState(true)
//     const [show, setShow] = useState(false);

//     function handleShow(breakpoint) {
//         setLogInfo(breakpoint);
//         setShow(true)
//     }

//     return (
//         <>
//         <div style={{display:'flex', position:'fixed', bottom:'5rem', right:'2rem'}}>
//             <BsFillShareFill className="tool-items"  onClick={handleShow}/>
//             <Modal show={show} fullscreen={logInfo} onHide={() => setShow(false)} id="share-screen" style={{width:'10vw', height:'15vh'}}>
//                 <Modal.Header closeButton style={{width:'10vw'}}>
//                 <Modal.Title>Pass It Along</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body style={{display:'flex', gap:'1rem'}}>
//                     <div style={{display:'flex', gap:'1rem'}}>
//                         <a href='https://www.facebook.com/sharer/sharer.php?u=https://my-ip-check.vercel.app/' target="_blank" rel="noopener noreferrer"><FacebookShareButton/><FacebookIcon/></a>
//                         <a href='https://www.linkedin.com/shareArticle?url=https://my-ip-check.vercel.app/' target="_blank" rel="noopener noreferrer"><LineShareButton/><LinkedinIcon/> </a>
//                     </div>
//                     </Modal.Body>
//             </Modal>
//         </div>
//         </>
//     )
// }

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {BsFillShareFill} from 'react-icons/bs';
import { FacebookShareButton, FacebookIcon, LineShareButton, LinkedinIcon } from 'react-share';
import '../css/styles.css';

export default function SocialMedia() {
  const [show, setShow] = useState(false);

  return (
    <>
      <BsFillShareFill className="tool-items" onClick={() => setShow(true)}/>
      
    <div id='share-me'>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{  width:'15rem', height:'25rem', marginLeft:'82%', marginTop:'35%'}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          Pass it along
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <div style={{display:'flex', gap:'1rem'}}>
                   <a href='https://www.facebook.com/sharer/sharer.php?u=https://my-ip-check.vercel.app/' target="_blank" rel="noopener noreferrer"><FacebookShareButton/><FacebookIcon/></a>
                   <a href='https://www.linkedin.com/shareArticle?url=https://my-ip-check.vercel.app/' target="_blank" rel="noopener noreferrer"><LineShareButton/><LinkedinIcon/> </a>
               </div>
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
}


