import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product/2">Product</Link>
      </li>
      <li>
        <Link to="/posts?uid=abc">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
