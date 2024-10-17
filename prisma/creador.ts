import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Asegúrate de que estas categorías existan previamente
  const cpuCategory = await prisma.category.findFirst({ where: { name: "CPU" } });
  const gpuCategory = await prisma.category.findFirst({ where: { name: "GPU" } });

  if (!cpuCategory || !gpuCategory) {
    throw new Error("Una o ambas categorías no existen");
  }

  const componentes = [
    { name: "Memoria RAM", price: 50, stock: 100, categoryId: cpuCategory.id },
    { name: "Tarjeta Gráfica", price: 300, stock: 50, categoryId: gpuCategory.id },
    { name: "Disco Duro SSD", price: 100, stock: 30, categoryId: cpuCategory.id },
  ];

  // Usar transacciones para insertar componentes
  const promises = componentes.map(comp => {
    return prisma.component.create({ data: comp });
  });

  const results = await prisma.$transaction(promises);
  results.forEach(result => console.log(result));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
