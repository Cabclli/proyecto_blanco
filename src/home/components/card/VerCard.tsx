import React, { useEffect, useState } from "react";
import ProductCard from "../card/LlamaCard";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface ComponentData {
  id: number;
  name: string;
  category: {
    name: string;
  };
  price: number;
  hrefViewMore: string;
  hrefSelectPlan: string;
}

const ComponentList: React.FC = () => {
  const [components, setComponents] = useState<ComponentData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const cardWidth = 300; // Ancho estimado de cada tarjeta
  const itemsPerPage = 4; // Cantidad de tarjetas visibles

  useEffect(() => {
    const fetchComponents = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setComponents(data);
    };

    fetchComponents();
  }, []);

  const handleScrollLeft = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleScrollRight = () => {
    const maxPage = Math.ceil(components.length / itemsPerPage) - 1;
    setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  };

  const router = useRouter();
  const handleVolverClick = () => {
    router.push("/");
  };

  // Cálculo del desplazamiento en píxeles para el translateX basado en la página actual
  const translateX = -currentPage * (cardWidth * itemsPerPage);

  return (
    <div>
      <Stack sx={{ display: "flex", flexDirection: "row", borderBottom: "3px solid gray", margin: "0 10%", paddingTop: "2%", alignItems: "center" }}>
        <Typography variant="h4">Ofertas</Typography>
      </Stack>

      <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
        <Button onClick={handleScrollLeft} disabled={currentPage === 0} sx={{ minWidth: 0, padding: 1 }}>
          &lt;
        </Button>

        <div style={{ overflow: 'hidden', width: `${cardWidth * itemsPerPage}px`, margin: '0 10px' }}>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.5s ease', // Animación suave al cambiar de página
            }}
          >
            {components.map((component) => (
              <div key={component.id} style={{ width: `${cardWidth}px`, flexShrink: 0 }}>
                <ProductCard
                  component={{
                    name: component.name,
                    price: component.price,
                    id: component.id
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <Button onClick={handleScrollRight} disabled={currentPage >= Math.ceil(components.length / itemsPerPage) - 1} sx={{ minWidth: 0, padding: 1 }}>
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default ComponentList;
