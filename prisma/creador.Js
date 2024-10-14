import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Asegúrate de que estas categorías existan previamente
  const cpuCategory = await prisma.category.findFirst({ where: { name: "CPU" } });
  const gpuCategory = await prisma.category.findFirst({ where: { name: "GPU" } });

  const componentes = [
    { name: "Memoria RAM", price: 50, stock: 100, categoryId: cpuCategory.id },
    { name: "Tarjeta Gráfica", price: 300, stock: 50, categoryId: gpuCategory.id },
    { name: "Disco Duro SSD", price: 100, stock: 30, categoryId: cpuCategory.id },
  ];

  for (const comp of componentes) {
    const result = await prisma.component.create({
      data: comp,
    });
    console.log(result);
  }
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
