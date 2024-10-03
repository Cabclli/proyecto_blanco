import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const componentes = [
    { componente: "Memoria RAM", precio: "50 USD", imagen: "url-de-la-imagen-ram.jpg" },
    { componente: "Tarjeta Gráfica", precio: "300 USD", imagen: "url-de-la-imagen-gpu.jpg" },
    { componente: "Disco Duro SSD", precio: "100 USD", imagen: "url-de-la-imagen-ssd.jpg" },
    { componente: "Memoria RAM", precio: "50 USD", imagen: "url-de-la-imagen-ram.jpg" },
    { componente: "Tarjeta Gráfica", precio: "300 USD", imagen: "url-de-la-imagen-gpu.jpg" },
    { componente: "Disco Duro SSD", precio: "100 USD", imagen: "url-de-la-imagen-ssd.jpg" },
  ];

  for (const comp of componentes) {
    const result = await prisma.componente.create({
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
