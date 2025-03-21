-- CreateEnum
CREATE TYPE "LogLevel" AS ENUM ('DEBUG', 'ERROR', 'INFO', 'TRACE', 'WARN');

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,
    "level" "LogLevel" NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);
