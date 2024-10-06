import { Container } from "@mui/material";
import BasicTable from "./caracteristicas/caracteristicas";
import Detalles from "./caracteristicas/Detalle";

const Todos = () => {
    return (
      <>
        <Container maxWidth="lg" sx={{paddingBottom:"10px"}}>
        <Detalles/>
        <br />
         <BasicTable/>
         
        </Container>
      </>
    );
  };
  export default Todos;
  