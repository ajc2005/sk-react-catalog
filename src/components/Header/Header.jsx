import { Link } from "react-router";
import "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/admin"}>Admin</Link>
    </header>
  )
}

export default Header