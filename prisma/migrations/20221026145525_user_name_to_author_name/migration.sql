/*
  Warnings:

  - You are about to drop the column `userName` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "userName",
ADD COLUMN     "authorName" TEXT;
