import { NavLink } from 'react-router-dom'; 

function SideMenu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ backgroundColor: 'rgba(35, 89, 40, 0.69)' }}>
            {/* LOGO */}
            <div className="brand-link">
                <img
                    src="dist/img/HelioAndesLogo.png"
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: '.8' }}
                />
                <span className="brand-text font-weight-light">Helio Andes</span>
            </div>

            {/* SIDEBAR */}
            <div className="sidebar">
                {/* Sidebar user panel */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        <span className="d-block text-white">Administrador</span>
                    </div>
                </div>

                {/* Sidebar Menu */}
                <nav className="mt-1">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        {/* Dashboard */}
                        <li className="nav-item">
                            <a href="/dashboard" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>Dashboard</p>
                            </a>
                        </li>

                        {/* Separador - Gestión */}
                        <li className="nav-header text-white">GESTIÓN</li>

                        {/* Servicios */}
                        <li className="nav-item">
                            <NavLink
                            to="/servicios"
                            className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <i className="nav-icon fas fa-wrench" />
                                <p>Servicios</p>
                            </NavLink>
                        </li>

                        {/* Planes */}
                        <li className="nav-item">
                            <NavLink
                                to="/planes"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <i className="nav-icon fas fa-solar-panel" />
                                <p>Planes</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default SideMenu;