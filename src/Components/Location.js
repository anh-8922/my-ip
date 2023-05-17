import { MdLocationPin } from 'react-icons/md';
import './css/styles.css';
const LocationPin = ({ text }) => (
  <div className="pin">
    <p className="pin-text">
      <MdLocationPin className="pin-icon" style={{ height: '100%' }} />
      {text}
    </p>
  </div>
);

export default LocationPin