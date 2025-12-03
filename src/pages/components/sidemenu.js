import { NavLink } from 'react-router-dom'; 

function SideMenu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <div className="brand-link">
                <img
                    src="dist/img/HelioAndesLogo.png"
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: '.8' }}
                />
                <span className="brand-text font-weight-light">Helio Andes</span>
            </div>

            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        <span className="d-block text-white">Administrador</span>
                    </div>
                </div>

                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        {/* Dashboard */}
                        <li className="nav-item">
                            <a href="/dashboard" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>Dashboard</p>
                            </a>
                        </li>

                        {/* Separador - Gestión */}
                        <li className="nav-header">GESTIÓN</li>

                        {/* Servicios */}
                        <li className="nav-item">
                            <a href="/servicios" className="nav-link">
                                <i className="nav-icon fas fa-wrench text-info" />
                                <p>Servicios</p>
                            </a>
                        </li>

                        {/* Planes */}
                        <li className="nav-item">
                            <NavLink
                                to="/planes"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <i className="nav-icon fas fa-solar-panel text-success" />
                                <p>Planes</p>
                            </NavLink>
                        </li>

                        {/* Separador - Usuario */}
                        <li className="nav-header">USUARIO</li>

                        {/* Salir */}
                        <li className="nav-item">
                            <a href="/logout" className="nav-link">
                                <i className="nav-icon fas fa-sign-out-alt text-danger" />
                                <p>Salir</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default SideMenu;