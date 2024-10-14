import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Crear categorías
  const cpuCategory = await prisma.category.create({
    data: {
      name: "CPU",
    },
  });

  const gpuCategory = await prisma.category.create({
    data: {
      name: "GPU",
    },
  });

  // Crear componentes
  await prisma.component.createMany({
    data: [
      {
        name: "Intel Core i9",
        description: "Procesador de alto rendimiento",
        price: 499.99,
        stock: 30,
        categoryId: cpuCategory.id,
      },
      {
        name: "NVIDIA GeForce RTX 3080",
        description: "Tarjeta gráfica potente",
        price: 699.99,
        stock: 20,
        categoryId: gpuCategory.id,
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
