import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

function ServicioDetallado() {
  const { id } = useParams();            // toma el :id de la URL
  const navigate = useNavigate();

  const [servicio, setServicio] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarServicio = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/api/servicios");
        const encontrado = response.data.find(
          (item) => String(item.id) === String(id)
        );

        if (!encontrado) {
          setError("Servicio no encontrado");
        } else {
          setServicio(encontrado);
        }
      } catch (err) {
        console.error(err);
        setError("Error al cargar el servicio");
      } finally {
        setCargando(false);
      }
    };

    cargarServicio();
  }, [id]);

  if (cargando) return <div className="content-wrapper"><p>Cargando...</p></div>;
  if (error) return <div className="content-wrapper"><p>{error}</p></div>;

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Detalle del Servicio</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="/servicios">Servicios</a></li>
                <li className="breadcrumb-item active">Detalle</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              {servicio.titulo} (ID: {servicio.id})
            </h3>
          </div>
          <div className="card-body">
            <p><strong>Descripción:</strong> {servicio.descripcion}</p>
            <p><strong>Detalle:</strong> {servicio.detalle}</p>

            {servicio.precio && (
              <p><strong>Precio:</strong> ${servicio.precio}</p>
            )}

            <button
              className="btn btn-secondary mt-3"
              onClick={() => navigate(-1)}
            >
              Volver
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicioDetallado;
