import { MdLocationPin } from 'react-icons/md';
import './css/styles.css';
const LocationPin = ({ text }) => (
  <div className="pin">
    <p
      className="pin-text"
      style={{
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transformOrigin: 'center center',
        color: "#924946",
      }}
    >
      <MdLocationPin className="pin-icon"  style={{ height: '100%', position:'relative'}} /><br/>
      {text}
    </p>
  </div>
);

export default LocationPin