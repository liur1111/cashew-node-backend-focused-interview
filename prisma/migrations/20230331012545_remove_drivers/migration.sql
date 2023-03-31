/*
  Warnings:

  - You are about to drop the column `driver_id` on the `package` table. All the data in the column will be lost.
  - You are about to drop the `driver` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "package" DROP CONSTRAINT "package_driver_id_fkey";

-- AlterTable
ALTER TABLE "package" DROP COLUMN "driver_id";

-- DropTable
DROP TABLE "driver";
