import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Servicios from './pages/servicios';
import Planes from './pages/planes';

// OJO: este es el default export de pages/detail.js
import ServicioDetallado from './pages/detail';

// 👉 IMPORTA TAMBIÉN EL DETALLE DE PLANES
import PlanDetail from './pages/plan_detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/servicios' element={<Servicios />} />
        <Route path='/servicios/:id' element={<ServicioDetallado />} />

        <Route path='/planes' element={<Planes />} />
        <Route path='/planes/:id' element={<PlanDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
