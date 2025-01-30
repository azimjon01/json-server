import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-3">
        <Link to={"/"}>
          <li>
            <a href="">Home</a>
          </li>
        </Link>
        <Link to={"/about"}>
          <li>
            <a href="">About</a>
          </li>
        </Link>
        <Link to={"/contact"}>
          <li>
            <a href="">Contact</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
