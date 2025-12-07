import { Link } from "react-router-dom";

function NavbarPrincipal() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{ backgroundColor: '#1b591480' }}>
            {/*BOTONES IZQUIERDA DEL NAVBAR*/}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <Link
                to="/dashboard"
                >
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="App.js" className="nav-link">Inicio</a>
                </li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavbarPrincipal;