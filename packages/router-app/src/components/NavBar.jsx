import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product">Product</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
