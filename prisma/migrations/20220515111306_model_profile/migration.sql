-- CreateTable
CREATE TABLE "profiles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "nickname" TEXT,
    "name" TEXT,
    "profile_image" TEXT,
    "thumbnail_image_url" TEXT,
    "birthyear" TEXT,
    "birthday" TEXT,
    "age" TEXT,
    "gender" TEXT,
    "email" TEXT,
    "mobile" TEXT,
    "mobile_e164" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_user_id_key" ON "profiles"("user_id");
