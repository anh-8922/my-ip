import{MdLocationPin} from 'react-icons/md'

const LocationPin = ({ text }) => (
    <div className="pin">
      
      <p className="pin-text"><MdLocationPin className="pin-icon" />{text}</p>
    </div>
  )
export default LocationPin