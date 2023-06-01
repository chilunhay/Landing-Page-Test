import Logo from '../../Assets/Logo.svg';
import './Navbar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="navbar-links-container">
        <a href="/">Service</a>
        <a href="/">About us</a>
        <a href="/">Blog</a>
      </div>
      <div className="navbar-button-container">
        <button className="language-button">
          EN {''}
          <ArrowDropDownIcon />
        </button>
        <button className="contact-button">Contact us</button>
      </div>
    </nav>
  );
};

export default Navbar;
