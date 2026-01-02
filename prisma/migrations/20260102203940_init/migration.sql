-- CreateEnum
CREATE TYPE "Environment" AS ENUM ('DEV', 'STATINGS', 'PROD');

-- CreateEnum
CREATE TYPE "CurrentStatus" AS ENUM ('ONLINE', 'INSTAVEL', 'OFFLINE');

-- CreateEnum
CREATE TYPE "IncidentStatus" AS ENUM ('INSTAVEL', 'OFFLINE');

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "environment" "Environment" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceHealth" (
    "service_id" INTEGER NOT NULL,
    "current_status" "CurrentStatus" NOT NULL,
    "last_checked_at" TIMESTAMP(3) NOT NULL,
    "last_response_time_ms" INTEGER,

    CONSTRAINT "ServiceHealth_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" SERIAL NOT NULL,
    "service_id" INTEGER NOT NULL,
    "status" "IncidentStatus" NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL,
    "ended_at" TIMESTAMP(3),
    "duration_seconds" INTEGER,
    "reason" TEXT,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServiceHealth" ADD CONSTRAINT "ServiceHealth_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
