-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_accounts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "compound_id" TEXT NOT NULL,
    "provider_type" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "refresh_token_expires" INTEGER,
    "access_token" TEXT,
    "access_token_expires" DATETIME,
    "token_type" TEXT,
    "scope" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_accounts" ("access_token", "access_token_expires", "compound_id", "created_at", "id", "provider_account_id", "provider_id", "provider_type", "refresh_token", "refresh_token_expires", "scope", "token_type", "updated_at", "user_id") SELECT "access_token", "access_token_expires", "compound_id", "created_at", "id", "provider_account_id", "provider_id", "provider_type", "refresh_token", "refresh_token_expires", "scope", "token_type", "updated_at", "user_id" FROM "accounts";
DROP TABLE "accounts";
ALTER TABLE "new_accounts" RENAME TO "accounts";
CREATE UNIQUE INDEX "accounts_compound_id_key" ON "accounts"("compound_id");
CREATE INDEX "providerAccountId" ON "accounts"("provider_account_id");
CREATE INDEX "providerId" ON "accounts"("provider_id");
CREATE INDEX "userId" ON "accounts"("user_id");
CREATE TABLE "new_sessions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    "session_token" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_sessions" ("access_token", "created_at", "expires", "id", "session_token", "updated_at", "user_id") SELECT "access_token", "created_at", "expires", "id", "session_token", "updated_at", "user_id" FROM "sessions";
DROP TABLE "sessions";
ALTER TABLE "new_sessions" RENAME TO "sessions";
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");
CREATE UNIQUE INDEX "sessions_access_token_key" ON "sessions"("access_token");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
