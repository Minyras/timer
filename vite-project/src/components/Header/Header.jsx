import { Link } from "react-router-dom";
import style from "./header.module.css";
const Header = () => {
  return (
    <div>
      <div className={style.buttons}>
        <Link to="/watch">Saat</Link>
        <Link to="/stopwatch">Saniyeolcen</Link>
        <Link to="/timer">Timer</Link>
      </div>
    </div>
  );
};

export default Header;
