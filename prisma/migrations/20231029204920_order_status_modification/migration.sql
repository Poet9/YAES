/*
  Warnings:

  - You are about to drop the column `order_statusId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `Order_status` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `order_status` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('VALIDATION', 'DELIVERY', 'SENT', 'CANCEL');

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_order_statusId_fkey";

-- DropIndex
DROP INDEX "City_name_key";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "order_statusId",
ADD COLUMN     "order_status" "OrderStatus" NOT NULL;

-- DropTable
DROP TABLE "Order_status";
