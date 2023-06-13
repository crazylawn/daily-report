/*
  Warnings:

  - You are about to drop the column `k_email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `n_email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `compound_id` on the `accounts` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "email_verified" DATETIME,
    "image" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_users" ("created_at", "email_verified", "id", "image", "name", "updated_at") SELECT "created_at", "email_verified", "id", "image", "name", "updated_at" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE TABLE "new_accounts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "provider_type" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "refresh_token_expires" INTEGER,
    "access_token" TEXT,
    "access_token_expires" DATETIME,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_accounts" ("access_token", "access_token_expires", "created_at", "id", "provider_account_id", "provider_id", "provider_type", "refresh_token", "refresh_token_expires", "scope", "token_type", "updated_at", "user_id") SELECT "access_token", "access_token_expires", "created_at", "id", "provider_account_id", "provider_id", "provider_type", "refresh_token", "refresh_token_expires", "scope", "token_type", "updated_at", "user_id" FROM "accounts";
DROP TABLE "accounts";
ALTER TABLE "new_accounts" RENAME TO "accounts";
CREATE UNIQUE INDEX "accounts_user_id_key" ON "accounts"("user_id");
CREATE INDEX "providerAccountId" ON "accounts"("provider_account_id");
CREATE INDEX "providerId" ON "accounts"("provider_id");
CREATE INDEX "userId" ON "accounts"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
