import Navbar from './Navbar';
// ...
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      
      <div className="nav-area">
      <img src={Logo} alt="Mi imagen SVG" style={{ width: '70px', height: '70px' }} />
        <Link to="/" className="logo">
          
        </Link>
        <Navbar />
      </div>

    </header>
  );
};

export default Header;
