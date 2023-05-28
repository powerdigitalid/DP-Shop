/*
  Warnings:

  - The primary key for the `cart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `product_name` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `product_price` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `subtotal` on the `order` table. All the data in the column will be lost.
  - Added the required column `id` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_cart_id_fkey`;

-- AlterTable
ALTER TABLE `cart` DROP PRIMARY KEY,
    DROP COLUMN `Id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `order` DROP COLUMN `product_name`,
    DROP COLUMN `product_price`,
    DROP COLUMN `quantity`,
    DROP COLUMN `subtotal`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'Belum Bayar',
    MODIFY `order_date` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `cart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
