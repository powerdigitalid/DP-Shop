/*
  Warnings:

  - You are about to drop the column `payment` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cart_id` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_name` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_price` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_google` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_product_id_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `payment`,
    DROP COLUMN `price`,
    DROP COLUMN `product_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `cart_id` INTEGER NOT NULL,
    ADD COLUMN `name_user` VARCHAR(191) NULL,
    ADD COLUMN `product_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `product_price` INTEGER NOT NULL,
    ADD COLUMN `user_google` VARCHAR(191) NOT NULL,
    MODIFY `expedisi` VARCHAR(191) NULL,
    MODIFY `subtotal` INTEGER NULL,
    MODIFY `shipping` INTEGER NULL;

-- DropTable
DROP TABLE `image`;

-- CreateTable
CREATE TABLE `cart` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `user_google` VARCHAR(191) NOT NULL,
    `product_price` INTEGER NOT NULL,
    `product_name` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `Cart_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `cart`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
