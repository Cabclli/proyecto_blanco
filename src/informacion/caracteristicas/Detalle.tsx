import { ShoppingCart } from "@mui/icons-material";
import { Typography, Button, Box, Grid } from "@mui/material";
import Link from "next/link";

const Detalles = () => {
  return (
    <>
      <Box sx={{ paddingTop: "10%" }}>
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6} sx={{ padding: 0, textAlign: "center" }}>
            <img
              src="https://picsum.photos/300/200"
              alt="Imagen Aleatoria"
              style={{
                maxWidth: "100%",
                 
                       
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ paddingLeft: "5%",paddingRight: "5%" }}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                borderBottom:"1px solid",
                fontSize:"40px",
                
              }}
            >
              Memoria Team DDR4 8GB 3200MHz T-Force Delta TUF RGB
            </Typography>
            <br />
            <Typography  variant="h2" sx={{ borderBottom:"1px solid",fontSize:"25px",color:"#4D62CC"}}>precio: $ 40.000</Typography>
            <br />
            <Link href={"/informacion"} passHref >
            
            <Button sx={{
            bgcolor: "#285b99",
            color: "#fff",
            "&:hover": {
              bgcolor: "#1e4a76",
            },
          }}>
            Agregar al carrito
        </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid>
              

        </Grid>
      </Box>
    </>
  );
};

export default Detalles;
