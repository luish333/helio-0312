import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

// COMPONENTE LISTA DE PLANES
function ListaPlanes() {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/planes")
      .then((response) => setPlanes(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(planes);

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Planes</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Planes</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="content">
        {/* Default box */}
        <div className="card card-solid">
          <div className="card-body pb-0">
            <div className="row">
              {planes.map((plan) => (
                <div
                  key={plan.id}
                  className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column"
                >
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                      {plan.id}
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="lead">
                            <b>{plan.titulo}</b>
                          </h2>
                          <p className="text-muted text-sm">
                            <b>Descripción: </b> {plan.descripcion}
                          </p>
                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-solar-panel" />
                              </span>
                              Detalle: {plan.detalle}
                            </li>
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-chart-line" />
                              </span>
                              Característica adicional
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <Link
                          to={`/planes/${plan.id}`}
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-clipboard-list" /> Ver Detalles
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* /.card-body */}
          <div className="card-footer">
            <nav aria-label="Contacts Page Navigation">
              <ul className="pagination justify-content-center m-0">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    7
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    8
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* /.card-footer */}
        </div>
        {/* /.card */}
      </section>
      {/* /.content */}
    </div>
  );
}

export default ListaPlanes;
