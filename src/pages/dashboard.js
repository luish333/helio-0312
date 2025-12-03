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
        {/* Encabezado */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Dashboard</h1>
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

        {/* Contenido principal */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">

              {/* TARJETA CELESTE -> SERVICIOS */}
              <div className="col-lg-3 col-6">
                <Link
                  to="/servicios"
                  className="small-box bg-info"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="inner">
                    <h3>150</h3>
                    <p>Servicios</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <span className="small-box-footer">
                    Ir a Servicios <i className="fas fa-arrow-circle-right" />
                  </span>
                </Link>
              </div>

              {/* TARJETA VERDE -> PLANES */}
              <div className="col-lg-3 col-6">
                <Link
                  to="/planes"
                  className="small-box bg-success"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: "20px" }}>%</sup>
                    </h3>
                    <p>Planes</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <span className="small-box-footer">
                    Ir a Planes <i className="fas fa-arrow-circle-right" />
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
