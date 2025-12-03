import NavbarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import ListaPlanes from "./components/lista_planes";

// PÁGINA PRINCIPAL DE PLANES
function Planes() {
  return (
    <div>
      <NavbarPrincipal />
      <SideMenu />
      <ListaPlanes />
    </div>
  );
}

export default Planes;
