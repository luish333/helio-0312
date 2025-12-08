import NavbarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import ListaServicios from "./components/lista_servicios";

//PÁGINA DONDE SE MUESTRAN LOS SERVICIOS CARGADOS POR MOCKOON
function Servicios() {
    return (
        <div>
            <NavbarPrincipal />
            <SideMenu />
            <ListaServicios />
        </div>
    )
}

export default Servicios;