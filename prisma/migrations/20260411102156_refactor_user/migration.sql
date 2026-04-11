/*
  Warnings:

  - You are about to drop the column `sexo` on the `User` table. All the data in the column will be lost.
  - Made the column `peso` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `altura` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `idade` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `atividade` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `balancoCalorico` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `alvo` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `calorias` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `carboidratos` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gorduras` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `proteinas` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tdee` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tmb` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imc` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('M', 'F');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "sexo",
ADD COLUMN     "caloriasDoDia" DOUBLE PRECISION,
ADD COLUMN     "carboidratosDoDia" DOUBLE PRECISION,
ADD COLUMN     "genero" "Genero",
ADD COLUMN     "gordurasDoDia" DOUBLE PRECISION,
ADD COLUMN     "proteinasDoDia" DOUBLE PRECISION,
ALTER COLUMN "peso" SET NOT NULL,
ALTER COLUMN "altura" SET NOT NULL,
ALTER COLUMN "idade" SET NOT NULL,
ALTER COLUMN "atividade" SET NOT NULL,
ALTER COLUMN "balancoCalorico" SET NOT NULL,
ALTER COLUMN "alvo" SET NOT NULL,
ALTER COLUMN "calorias" SET NOT NULL,
ALTER COLUMN "carboidratos" SET NOT NULL,
ALTER COLUMN "gorduras" SET NOT NULL,
ALTER COLUMN "proteinas" SET NOT NULL,
ALTER COLUMN "tdee" SET NOT NULL,
ALTER COLUMN "tmb" SET NOT NULL,
ALTER COLUMN "imc" SET NOT NULL;

-- DropEnum
DROP TYPE "Sexo";
