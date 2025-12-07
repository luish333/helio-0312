import React from "react";
import NavbarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <NavbarPrincipal />
      <SideMenu />
      <div className="content-wrapper">
        {/* ENCABEZADO*/}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Dashboard - Helio Andes</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/dashboard">Inicio</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">

              {/*SERVICIOS */}
              <div className="col-lg-3 col-6">
                <Link
                  to="/servicios"
                  className="small-box bg-info"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="inner">
                    <h3>Servicios</h3>
                    <p>Disponibles</p>
                  </div>
                  <div className="icon">
                    <i className="nav-icon fas fa-wrench" />
                  </div>
                  <span className="small-box-footer">
                    Ir a conocerlos <i className="fas fa-arrow-circle-right" />
                  </span>
                </Link>
              </div>

              {/*PLANES */}
              <div className="col-lg-3 col-6">
                <Link
                  to="/planes"
                  className="small-box bg-success"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="inner">
                    <h3>Planes</h3>
                    <p>Disponibles</p>
                  </div>
                  <div className="icon">
                    <i className="nav-icon fas fa-solar-panel" />
                  </div>
                  <span className="small-box-footer">
                    Ir a conocerlos <i className="fas fa-arrow-circle-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
