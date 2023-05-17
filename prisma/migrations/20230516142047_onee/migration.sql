/*
  Warnings:

  - You are about to drop the column `payment` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_google` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_product_id_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `payment`,
    ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `user_google` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `image`;

-- CreateTable
CREATE TABLE `Cart` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `user_google` VARCHAR(191) NOT NULL,
    `product_price` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
