-- CreateTable
CREATE TABLE "Rake" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rake_name" INTEGER NOT NULL,
    "total_strength" INTEGER NOT NULL,
    "days_of_journey" INTEGER NOT NULL,
    "start_journey" TEXT NOT NULL,
    "end_journey" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Escort" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rake_id" TEXT NOT NULL,
    "staff_id" TEXT NOT NULL,
    CONSTRAINT "Escort_rake_id_fkey" FOREIGN KEY ("rake_id") REFERENCES "Rake" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Escort_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "Staff" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Staff" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tnumber" TEXT NOT NULL,
    "pnumber" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'SPARE'
);
INSERT INTO "new_Staff" ("designation", "id", "name", "pnumber", "tnumber") SELECT "designation", "id", "name", "pnumber", "tnumber" FROM "Staff";
DROP TABLE "Staff";
ALTER TABLE "new_Staff" RENAME TO "Staff";
CREATE UNIQUE INDEX "Staff_tnumber_key" ON "Staff"("tnumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
