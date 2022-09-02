-- CreateEnum
CREATE TYPE "UserTypes" AS ENUM ('MEMBER', 'TRAINER', 'OWNER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Countries" AS ENUM ('RO');

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "role" "UserTypes" NOT NULL DEFAULT 'MEMBER',
    "email" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "country" "Countries" DEFAULT 'RO',
    "phoneNumber" TEXT,
    "branchId" TEXT,
    "street" TEXT,
    "number" TEXT,
    "city" TEXT,
    "postalCode" TEXT,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gym" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" "Countries" DEFAULT 'RO',

    CONSTRAINT "Gym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Branch" (
    "id" TEXT NOT NULL,
    "gymId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "street" TEXT,
    "number" TEXT,
    "city" TEXT,
    "country" "Countries" DEFAULT 'RO',
    "postalCode" TEXT,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "Gym"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
