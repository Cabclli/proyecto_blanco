import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';

const AccordionUsage = () => {
  return (
    <Box
     
      sx={{ 
        padding:"10%", // Fondo transparente para evitar un fondo adicional
      }}
    >
      <Box
        sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',}}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  sx={{ color: 'blue' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Precio
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "blue" }}>
              ¿El precio que figura en la web es el precio final?
            </Typography>
            <br />
            <Typography sx={{ color: "#525252 " }}>
              Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  sx={{ color: 'blue' }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Cómo armar tu PC
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#525252 " }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In exercitationem nobis quo non nesciunt laudantium? Ea error repellendus doloribus molestiae, sint, quae aspernatur cupiditate velit fuga assumenda, quis nisi. Laboriosam.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  sx={{ color: 'blue' }}/>}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Condición de garantía
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores suscipit blanditiis dolore deserunt illum perspiciatis cupiditate ratione quaerat, id necessitatibus exercitationem! Mollitia illum voluptates harum reprehenderit exercitationem soluta, temporibus cum!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  sx={{ color: 'blue' }}/>}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            Envíos
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores suscipit blanditiis dolore deserunt illum perspiciatis cupiditate ratione quaerat, id necessitatibus exercitationem! Mollitia illum voluptates harum reprehenderit exercitationem soluta, temporibus cum!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  sx={{ color: 'blue' }}/>}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            Métodos de compra
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores suscipit blanditiis dolore deserunt illum perspiciatis cupiditate ratione quaerat, id necessitatibus exercitationem! Mollitia illum voluptates harum reprehenderit exercitationem soluta, temporibus cum!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  sx={{ color: 'blue' }}/>}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            ¿Quiénes somos?
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores suscipit blanditiis dolore deserunt illum perspiciatis cupiditate ratione quaerat, id necessitatibus exercitationem! Mollitia illum voluptates harum reprehenderit exercitationem soluta, temporibus cum!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default AccordionUsage;
