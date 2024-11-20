import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import './Navbar.css'

const Navbar = () => {
    
    const [openMenu, setOpenmenu] = useState(false)

    return (
        <>
            <div className='container'>
                <Link to="/">
                    <img src="/LogoText.jpg" alt="" />            
                </Link>
                <ul className="ulDesk">
                    <li className="liDesk">
                        <a href="/#aboutus">Nosotros</a>
                    </li>
                    <li className="liDesk">
                        <Link to="/products">Productos</Link>
                    </li>
                    <li className="liDesk">
                        <Link to="/contact">Contactanos</Link>
                    </li>
                </ul>
            </div>
            <div className="containerMobile">
                <button className="btnNav" onClick={() => setOpenmenu(!openMenu)}><BiMenu color="#000" size={42}/></button>
            </div>
            <div  className= {`menu ${openMenu ? "open" : ""}`}>
                <ul className="ulMobile">
                    <li className={openMenu ? "liMobileOn" : "liMobileOff"}>
                        <Link className="link" to="/#aboutus">Nosotros</Link>
                    </li>
                    <li className={openMenu ? "liMobileOn" : "liMobileOff"}>
                        <Link className="link" to="/products">Productos</Link>
                    </li>
                    <li className={openMenu ? "liMobileOn" : "liMobileOff"}>
                        <Link className="link" to="/contact">Contactanos</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar