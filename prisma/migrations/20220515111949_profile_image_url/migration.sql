/*
  Warnings:

  - You are about to drop the column `profile_image` on the `profiles` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_profiles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "nickname" TEXT,
    "name" TEXT,
    "profile_image_url" TEXT,
    "thumbnail_image_url" TEXT,
    "birthyear" TEXT,
    "birthday" TEXT,
    "age" TEXT,
    "gender" TEXT,
    "email" TEXT,
    "mobile" TEXT,
    "mobile_e164" TEXT
);
INSERT INTO "new_profiles" ("age", "birthday", "birthyear", "email", "gender", "id", "mobile", "mobile_e164", "name", "nickname", "thumbnail_image_url", "user_id") SELECT "age", "birthday", "birthyear", "email", "gender", "id", "mobile", "mobile_e164", "name", "nickname", "thumbnail_image_url", "user_id" FROM "profiles";
DROP TABLE "profiles";
ALTER TABLE "new_profiles" RENAME TO "profiles";
CREATE UNIQUE INDEX "profiles_user_id_key" ON "profiles"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
