import { MdLocationPin } from 'react-icons/md';

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
      }}
    >
      <MdLocationPin className="pin-icon" style={{ height: '100%' }} />
      {text}
    </p>
  </div>
);

export default LocationPin