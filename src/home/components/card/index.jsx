import * as React from 'react';
import { Typography, Stack, Card, CardMedia, CardContent, Button, CardActions } from "@mui/material";
import { ofertas } from './ofertas/index'; // Asegúrate de importar el arreglo de ofertas

export default function MediaCard() {
  const cardWidth = 345; // Ancho de la tarjeta
  const spacing = 16; // Espacio entre las tarjetas

  // Repite la lista de ofertas para el efecto de carrusel infinito
  const repeatedOfertas = [...ofertas, ...ofertas, ...ofertas];

  // Estado para el desplazamiento
  const [scrollX, setScrollX] = React.useState(0);

  // Ancho total del contenedor basado en la repetición
  const containerWidthWithRepetition = repeatedOfertas.length * (cardWidth + spacing);

  const scrollAmount = cardWidth + spacing; // Ancho de la tarjeta más el espacio

  const handleScrollLeft = () => {
    setScrollX(prevScrollX => {
      return Math.min(prevScrollX + scrollAmount, 0);
    });
  };

  const handleScrollRight = () => {
    setScrollX(prevScrollX => {
      return Math.max(prevScrollX - scrollAmount, -containerWidthWithRepetition + window.innerWidth);
    });
  };

  return (
    <Stack direction="column" spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h4">
        Componentes en ofertas
      </Typography>
      <br />
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: `${spacing}px`,
            marginTop: "10px",
            marginBottom: "10px",
            transform: `translateX(${scrollX}px)`,
            transition: 'transform 0.3s ease',
            whiteSpace: 'nowrap',
            width: `${containerWidthWithRepetition}px`,
            boxSizing: 'border-box'
          }}
        >
          {repeatedOfertas.map((oferta, index) => (
            <Card key={index} sx={{ width: cardWidth }}>
              <CardMedia
                component="img"
                height="140"
                image={oferta.imagen}
                alt={oferta.componente}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {oferta.componente}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {oferta.precio}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Comprar
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
        <Button
          onClick={handleScrollLeft}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            zIndex: 1
          }}
        >
          &lt;
        </Button>
        <Button
          onClick={handleScrollRight}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            zIndex: 1
          }}
        >
          &gt;
        </Button>
      </div>
    </Stack>
  );
}
