import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';   // 👈 NUEVO

function ListaServicios() {

    const [servicios, setServicios] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/servicios')
            .then((response) => setServicios(response.data))
            .catch((error) => console.log(error))
    }, []);

    console.log(servicios);

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Servicios</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                <li className="breadcrumb-item active">Servicios</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="content">
                <div className="card card-solid">
                    <div className="card-body pb-0">
                        <div className="row">
                            {servicios.map((servicio) => (
                                <div key={servicio.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                    <div className="card bg-light d-flex flex-fill">
                                        <div className="card-header text-muted border-bottom-0">
                                            {servicio.id}
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2 className="lead"><b>{servicio.titulo}</b></h2>
                                                    <p className="text-muted text-sm">
                                                        <b>Descripción: </b> {servicio.descripcion}
                                                    </p>
                                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                                        <li className="small">
                                                            <span className="fa-li"><i className="fas fa-lg fa-solar-panel" /></span>
                                                            Detalle: {servicio.detalle}
                                                        </li>
                                                        <li className="small">
                                                            <span className="fa-li"><i className="fas fa-lg fa-chart-line" /></span>
                                                            Característica adicional
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="text-right">
                                                {/* 👇 AQUÍ EL CAMBIO */}
                                                <Link to={`/servicios/${servicio.id}`} className="btn btn-sm btn-primary">
                                                    <i className="fas fa-clipboard-list" /> Ver Detalles
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card-footer">
                        <nav aria-label="Contacts Page Navigation">
                            <ul className="pagination justify-content-center m-0">
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item"><a className="page-link" href="#">7</a></li>
                                <li className="page-item"><a className="page-link" href="#">8</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListaServicios;
