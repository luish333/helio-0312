import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

function PlanDetallado() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [plan, setPlan] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarPlan = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/api/planes");
        const encontrado = response.data.find(
          (item) => String(item.id) === String(id)
        );

        if (!encontrado) {
          setError("Plan no encontrado");
        } else {
          setPlan(encontrado);
        }
      } catch (err) {
        console.error(err);
        setError("Error al cargar el plan");
      } finally {
        setCargando(false);
      }
    };

    cargarPlan();
  }, [id]);

  if (cargando) return <div className="content-wrapper"><p>Cargando...</p></div>;
  if (error) return <div className="content-wrapper"><p>{error}</p></div>;

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Detalle del Plan</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/planes">Planes</a>
                </li>
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
              {plan.titulo} (ID: {plan.id})
            </h3>
          </div>
          <div className="card-body">
            <p>
              <strong>Descripción:</strong> {plan.descripcion}
            </p>
            <p>
              <strong>Detalle:</strong> {plan.detalle}
            </p>

            {plan.precio && (
              <p>
                <strong>Precio:</strong> ${plan.precio}
              </p>
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

export default PlanDetallado;
