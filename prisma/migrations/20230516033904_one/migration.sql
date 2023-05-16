/*
  Warnings:

  - The primary key for the `image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `payment` on the `order` table. All the data in the column will be lost.
  - Added the required column `Id` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_product_id_fkey`;

-- AlterTable
ALTER TABLE `image` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `image_url`,
    ADD COLUMN `Id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `path` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`Id`);

-- AlterTable
ALTER TABLE `order` DROP COLUMN `payment`,
    ADD COLUMN `address` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Cart` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `product_price` INTEGER NOT NULL,
    `CartId` INTEGER NULL,
    `order_date` DATETIME(3) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `address` VARCHAR(191) NULL,
    `expedisi` VARCHAR(191) NOT NULL,
    `subtotal` INTEGER NOT NULL,
    `shipping` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Order_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_CartId_fkey` FOREIGN KEY (`CartId`) REFERENCES `Cart`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
