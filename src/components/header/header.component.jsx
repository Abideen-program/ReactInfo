import Logo from "../../images/logo.png";
import './header.styles.scss'

const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <img className='nav-logo' src={Logo} alt="react-icon" />
        <ul className="nav-links">
          <li className="nav-item">Pricing</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
