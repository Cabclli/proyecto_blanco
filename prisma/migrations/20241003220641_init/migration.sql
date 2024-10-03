-- CreateTable
CREATE TABLE "Ofertas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "componente" TEXT NOT NULL,
    "img" TEXT,
    "precio" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Ofertas_componente_key" ON "Ofertas"("componente");
