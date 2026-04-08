-- CreateTable
CREATE TABLE "Alimento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "calorias" DOUBLE PRECISION,
    "proteina" DOUBLE PRECISION,
    "carboidrato" DOUBLE PRECISION,
    "gordura" DOUBLE PRECISION,

    CONSTRAINT "Alimento_pkey" PRIMARY KEY ("id")
);
