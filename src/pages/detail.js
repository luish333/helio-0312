import NavbarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import ServicioDetallado from "./components/servicio_detalle";

// PAGINA DONDE SE MUESTRA EL DETALLE DEL SERVICIO.
function Detail() {
  return (
    <div>
      <NavbarPrincipal />
      <SideMenu />
      <ServicioDetallado />
    </div>
  );
}

// 👇 AQUÍ EL CAMBIO IMPORTANTE
export default Detail;
