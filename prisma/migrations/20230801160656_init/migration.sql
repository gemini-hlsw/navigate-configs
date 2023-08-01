-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Target" (
    "pk" SERIAL NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Test',
    "raAz" TEXT NOT NULL,
    "decEl" TEXT NOT NULL,
    "epoch" TEXT NOT NULL DEFAULT 'J2000.000',
    "type" TEXT NOT NULL DEFAULT 'Base',
    "coordSystem" TEXT NOT NULL DEFAULT 'Celestial',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blindTargets" JSONB NOT NULL,
    "guideTargets" JSONB NOT NULL,

    CONSTRAINT "Target_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "FixedTarget" (
    "pk" SERIAL NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Test',
    "raAz" TEXT NOT NULL,
    "decEl" TEXT NOT NULL,
    "epoch" TEXT NOT NULL DEFAULT 'J2000.000',
    "type" TEXT NOT NULL DEFAULT 'Base',
    "coordSystem" TEXT NOT NULL DEFAULT 'Celestial',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blindTargets" JSONB NOT NULL,
    "guideTargets" JSONB NOT NULL,

    CONSTRAINT "FixedTarget_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "Instrument" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iaa" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "issPort" INTEGER NOT NULL,
    "focusOffset" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "wfs" TEXT NOT NULL DEFAULT 'None',
    "originX" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "originY" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "ao" BOOLEAN NOT NULL DEFAULT false,
    "extraParams" JSONB NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CurrentInstrument" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iaa" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "issPort" INTEGER NOT NULL,
    "focusOffset" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "wfs" TEXT NOT NULL DEFAULT 'None',
    "originX" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "originY" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "ao" BOOLEAN NOT NULL DEFAULT false,
    "extraParams" JSONB NOT NULL,

    CONSTRAINT "CurrentInstrument_pkey" PRIMARY KEY ("id")
);
