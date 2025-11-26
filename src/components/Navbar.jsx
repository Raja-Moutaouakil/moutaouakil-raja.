// Navbar.js
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="index.html" aria-label="Go to homepage" title="Homepage">
            {props.firstName}
            <span>{props.lastName}</span>
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="#" aria-label="About section" title="About">About</a>
          </li>

          <li>
            <a href="#projects" aria-label="Projects section" title="Projects">Projects</a>
          </li>
          <li>
            <a href="#skills" aria-label="Skills section" title="Skills">Skills</a>
          </li>
          
          <li>
            <a href="#contact" className="navbar-btn" aria-label="Contact section" title="Contact Me">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Navbar;
