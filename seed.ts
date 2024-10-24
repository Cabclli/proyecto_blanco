import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Crear categorías
  const categories = await prisma.category.createMany({
    data: [
      { name: "CPU" },
      { name: "GPU" },
      { name: "Memoria RAM" },
      { name: "Almacenamiento" },
      { name: "Placas Madre" },
      { name: "Fuentes de Poder" },
      { name: "Gabinetes" },
      { name: "Refrigeración" },
    ],
  });

  // Obtener las categorías creadas
  const categoryNames = [
    "CPU",
    "GPU",
    "Memoria RAM",
    "Almacenamiento",
    "Placas Madre",
    "Fuentes de Poder",
    "Gabinetes",
    "Refrigeración",
  ];
  const createdCategories = await prisma.category.findMany({
    where: {
      name: { in: categoryNames },
    },
  });

  // Crear componentes
  await prisma.component.createMany({
    data: [
      // Componentes de CPU
      {
        name: "Intel Core i9",
        description: "Procesador de alto rendimiento",
        price: 499.99,
        stock: 30,
        categoryId: createdCategories.find((cat) => cat.name === "CPU")!.id,
      },
      {
        name: "AMD Ryzen 9 5900X",
        description: "Procesador con excelente rendimiento",
        price: 399.99,
        stock: 25,
        categoryId: createdCategories.find((cat) => cat.name === "CPU")!.id,
      },

      // Componentes de GPU
      {
        name: "NVIDIA GeForce RTX 3080",
        description: "Tarjeta gráfica potente",
        price: 699.99,
        stock: 20,
        categoryId: createdCategories.find((cat) => cat.name === "GPU")!.id,
      },
      {
        name: "AMD Radeon RX 6800 XT",
        description: "Tarjeta gráfica para gaming",
        price: 649.99,
        stock: 15,
        categoryId: createdCategories.find((cat) => cat.name === "GPU")!.id,
      },

      // Componentes de Memoria RAM
      {
        name: "Corsair Vengeance LPX 16GB",
        description: "Memoria RAM de alto rendimiento",
        price: 79.99,
        stock: 50,
        categoryId: createdCategories.find((cat) => cat.name === "Memoria RAM")!
          .id,
      },
      {
        name: "G.Skill Ripjaws V 32GB",
        description: "Memoria RAM de alta capacidad",
        price: 139.99,
        stock: 40,
        categoryId: createdCategories.find((cat) => cat.name === "Memoria RAM")!
          .id,
      },

      // Componentes de Almacenamiento
      {
        name: "Samsung 970 EVO Plus 1TB",
        description: "SSD NVMe rápido",
        price: 129.99,
        stock: 30,
        categoryId: createdCategories.find(
          (cat) => cat.name === "Almacenamiento"
        )!.id,
      },
      {
        name: "Seagate Barracuda 2TB",
        description: "Disco duro mecánico",
        price: 59.99,
        stock: 25,
        categoryId: createdCategories.find(
          (cat) => cat.name === "Almacenamiento"
        )!.id,
      },

      // Componentes de Placas Madre
      {
        name: "ASUS ROG Strix B550-F",
        description: "Placa madre para Ryzen",
        price: 199.99,
        stock: 20,
        categoryId: createdCategories.find(
          (cat) => cat.name === "Placas Madre"
        )!.id,
      },
      {
        name: "Gigabyte Z490 AORUS Master",
        description: "Placa madre para Intel",
        price: 299.99,
        stock: 15,
        categoryId: createdCategories.find(
          (cat) => cat.name === "Placas Madre"
        )!.id,
      },

      // Componentes de Fuentes de Poder
      {
        name: "Corsair RM750",
        description: "Fuente de poder de 750W",
        price: 109.99,
        stock: 30,
        categoryId: createdCategories.find(
          (cat) => cat.name === "Fuentes de Poder"
        )!.id,
      },
      {
        name: "EVGA SuperNOVA 650 G5",
        description: "Fuente de poder de 650W",
        price: 89.99,
        stock: 25,
        categoryId: createdCategories.find(
          (cat) => cat.name === "Fuentes de Poder"
        )!.id,
      },

      // Componentes de Gabinetes
      {
        name: "NZXT H510",
        description: "Gabinete ATX moderno",
        price: 69.99,
        stock: 20,
        categoryId: createdCategories.find((cat) => cat.name === "Gabinetes")!
          .id,
      },
      {
        name: "Corsair 4000D Airflow",
        description: "Gabinete con gran ventilación",
        price: 79.99,
        stock: 15,
        categoryId: createdCategories.find((cat) => cat.name === "Gabinetes")!
          .id,
      },

      // Componentes de Refrigeración
      {
        name: "Cooler Master Hyper 212",
        description: "Refrigeración por aire",
        price: 39.99,
        stock: 50,
        categoryId: createdCategories.find(
          (cat) => cat.name === "Refrigeración"
        )!.id,
      },
      {
        name: "Corsair H100i RGB",
        description: "Refrigeración líquida",
        price: 109.99,
        stock: 20,
        categoryId: createdCategories.find(
          (cat) => cat.name === "Refrigeración"
        )!.id,
      },
    ],
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
