import NavbarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import ServicioDetallado from "./components/servicio_detalle";

function Detail() {
  return (
    <div>
      <NavbarPrincipal />
      <SideMenu />
      <ServicioDetallado />
    </div>
  );
}

export default Detail;
