import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    return (
        <div className='container'>
            <Link to="/">
                <img src="/LogoText.jpg" alt="" />            
            </Link>
            <ul>
                <li>
                    <a href="/#aboutus">Nosotros</a>
                </li>
                <li>
                    <Link to="/products">Productos</Link>
                </li>
                <li>
                    <Link to="/contact">Contactanos</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar