-- DropForeignKey
ALTER TABLE `telefone` DROP FOREIGN KEY `Telefone_contatoId_fkey`;

-- DropIndex
DROP INDEX `Telefone_contatoId_fkey` ON `telefone`;

-- AddForeignKey
ALTER TABLE `Telefone` ADD CONSTRAINT `Telefone_contatoId_fkey` FOREIGN KEY (`contatoId`) REFERENCES `Contato`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
