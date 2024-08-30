/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Produts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT[],

    CONSTRAINT "Produts_pkey" PRIMARY KEY ("id")
);
