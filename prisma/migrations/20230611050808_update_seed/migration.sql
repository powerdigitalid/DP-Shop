/*
  Warnings:

  - Made the column `order_date` on table `order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `order_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
