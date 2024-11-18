import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className='container'>
            <img src="/LogoText.jpg" alt="" />
            <ul>
                <li>
                    Nosotros
                </li>
                <li>
                    Productos
                </li>
                <li>
                    Contactanos
                </li>
            </ul>
        </div>
    )
}

export default Navbar