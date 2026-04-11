-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_challenges" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "vehicleType" TEXT NOT NULL,
    "tripDuration" TEXT NOT NULL,
    "route" TEXT,
    "agreedToTerms" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "completedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "challenges_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_challenges" ("agreedToTerms", "completedAt", "createdAt", "email", "fullName", "id", "route", "status", "tripDuration", "updatedAt", "userId", "vehicleType") SELECT "agreedToTerms", "completedAt", "createdAt", "email", "fullName", "id", "route", "status", "tripDuration", "updatedAt", "userId", "vehicleType" FROM "challenges";
DROP TABLE "challenges";
ALTER TABLE "new_challenges" RENAME TO "challenges";
CREATE INDEX "challenges_userId_idx" ON "challenges"("userId");
CREATE INDEX "challenges_status_idx" ON "challenges"("status");
CREATE INDEX "challenges_createdAt_idx" ON "challenges"("createdAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
