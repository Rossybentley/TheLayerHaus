import "./Navbar.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <header className="navbar">
      <Container>
        <nav className="navbar__content">
          <Link to="/" className="navbar__logo">
            The Layer Haus
          </Link>

          <ul className="navbar__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <button className="navbar__button">Book Consultation</button>
        </nav>
      </Container>
    </header>
  );
};
export default Navbar;
