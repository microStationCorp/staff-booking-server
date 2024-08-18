-- CreateTable
CREATE TABLE "Staff" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tnumber" TEXT NOT NULL,
    "pnumber" TEXT NOT NULL,
    "designation" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Staff_tnumber_key" ON "Staff"("tnumber");
