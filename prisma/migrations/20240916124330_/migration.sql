/*
  Warnings:

  - You are about to drop the column `typeId` on the `account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `account` DROP COLUMN `typeId`,
    ADD COLUMN `type` VARCHAR(191) NULL;
