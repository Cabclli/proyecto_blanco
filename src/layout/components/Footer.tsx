import * as React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Button, ButtonProps, Link, Stack } from "@mui/material";
import styled from "@emotion/styled";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const ColorButton = styled(Button)<ButtonProps>(({ }) => ({
    "&:hover": {
      color: "#fff",
      backgroundColor: "#486c99",
    },
  }));

  return (
    <footer>
      <Stack
        sx={{
          bgcolor: "#153f73",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          color: "#fff",
          paddingBottom: 1,
          paddingTop: 1,
        }}
      >
        <ColorButton variant="text" sx={{ color: "white" }}>
          <Accordion sx={{bgcolor:"transparent", boxShadow: 0, color:"#fff"}}>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Contactanos 
            </AccordionSummary>
            <AccordionDetails>
            <Link href="https://www.asrock.com/mb/AMD/A520M-HDV/index.la.asp#BIOS" color={"#fff"}>11-3227-8469</Link>
            </AccordionDetails>
          </Accordion>
        </ColorButton>
        <ColorButton variant="text" sx={{ color: "white" }}>
          <Accordion sx={{bgcolor:"transparent", boxShadow: 0, color:"#fff"}}>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Nuestras redes 
            </AccordionSummary>
            <AccordionDetails>
            <Link href="https://www.instagram.com/lucaluriaud" color={"#fff"}>Instagram</Link>
            </AccordionDetails>
          </Accordion>
        </ColorButton>
        <ColorButton variant="text" sx={{ color: "white" }}>
          <Accordion sx={{bgcolor:"transparent", boxShadow: 0, color:"#fff"}}>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Sobre nosotros 
            </AccordionSummary>
            <AccordionDetails>
            <Link href="https://www.asrock.com/mb/AMD/A520M-HDV/index.la.asp#BIOS" color={"#fff"}>Hola, blablabla</Link>
            </AccordionDetails>
          </Accordion>
        </ColorButton>
        <ColorButton variant="text" sx={{ color: "white" }}>
          <Accordion sx={{bgcolor:"transparent", boxShadow: 0, color:"#fff"}}>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Ayuda 
            </AccordionSummary>
            <AccordionDetails>
            <Link href="https://www.asrock.com/mb/AMD/A520M-HDV/index.la.asp#BIOS" color={"#fff"}>Problema, solucion</Link>
            </AccordionDetails>
          </Accordion>
        </ColorButton>
      </Stack>
    </footer>
  );
}