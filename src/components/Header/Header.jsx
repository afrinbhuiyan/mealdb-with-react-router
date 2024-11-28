import { NavLink} from "react-router-dom";
import Head from "../Head/Head";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
                <NavLink to={"/home"}>Home</NavLink>
                <Head></Head>
                {/* <NavLink to={"/categories"} > Categories </NavLink>                 */}
            </nav>
        </div>
    );
};

export default Header;