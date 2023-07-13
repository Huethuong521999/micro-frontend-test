import { useNavigate } from 'react-router-dom';
import './homepage.css';
import { users, remoteModules} from '../utils/constant';

export function HomePage() {
  const navigate = useNavigate()
  const handleButtonClick= (to) => {
    navigate('/login')
  };

  return (
    <div className='main'>
      <div className='header d-flex justify-content-xl-between'>
        <img src='media/logos/logo_OCT.png'></img>
        <div className='app-navbar flex-shrink-0'>
        </div>
      </div>
      <div className='container'>
        <div className='button-group'>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/reception-list")}>
              <img src='media/images/button.png'></img>
            </button>
            <span className='title-button'>Patient</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/ds-tiep-don")}>
              <img src='media/images/button.png'></img>
            </button>
            <span className='title-button'>Admin</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/phan-he-noi-tru/tiep-don")}>
              <img src='media/images/button.png'></img>
            </button>
            <span className='title-button'>Clinical</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/dashboard")}>
              <img src='media/images/button.png'></img>
            </button>
            <span className='title-button'>Phamarcy</span>
          </div>
        </div>
      </div>
    </div>
  );
}