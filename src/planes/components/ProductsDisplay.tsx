import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

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

  useEffect(() => {
    const fetchComponents = async () => {
      const response = await fetch('/api/index'); // Asegúrate de que esta sea la ruta correcta
      const data = await response.json();
      setComponents(data);
    };

    fetchComponents();
  }, []);

  return (
    <div>
      {components.map((component) => (
        <ProductCard key={component.id} component={{
          name: component.name,
          description: component.category.name,
          price: component.price,
          hrefViewMore: '#', // Ajusta según tu lógica
          hrefSelectPlan: '#', // Ajusta según tu lógica
        }} />
      ))}
    </div>
  );
};

export default ComponentList;
