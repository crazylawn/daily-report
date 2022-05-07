-- AlterTable
ALTER TABLE "accounts" ADD COLUMN "refresh_token_expires" INTEGER;
ALTER TABLE "accounts" ADD COLUMN "scope" TEXT;
