import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar bg-dark container">
      <h4>
        <Link to="/" className="link">
          Home
        </Link>
      </h4>
      <h4>
        <Link to="/add" className="link">
          ADD Book
        </Link>
      </h4>
      <h4>
        <Link to="/books" className="link">
          Books
        </Link>
      </h4>
      <h4>
        <Link to="/cart" className="link">
          Cart
        </Link>
      </h4>
    </nav>
  );
};
