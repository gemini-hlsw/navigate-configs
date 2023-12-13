-- CreateEnum
CREATE TYPE "SiteType" AS ENUM ('GN', 'GS');

-- CreateEnum
CREATE TYPE "GuidingType" AS ENUM ('NORMAL');

-- CreateEnum
CREATE TYPE "TargetType" AS ENUM ('FIXED', 'SCIENCE', 'BLINDOFFSET', 'OIWFS', 'PWFS1', 'PWFS2');

-- CreateEnum
CREATE TYPE "WfsType" AS ENUM ('NONE', 'PWFS1', 'PWFS2', 'OIWFS');

-- CreateEnum
CREATE TYPE "TrackingType" AS ENUM ('TRACKING', 'FIXED');

-- CreateTable
CREATE TABLE "User" (
    "pk" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "Configuration" (
    "pk" SERIAL NOT NULL,
    "site" "SiteType" NOT NULL DEFAULT 'GN',
    "selectedTarget" INTEGER,
    "selectedOiTarget" INTEGER,
    "selectedP1Target" INTEGER,
    "selectedP2Target" INTEGER,
    "oiGuidingType" "GuidingType" NOT NULL,
    "p1GuidingType" "GuidingType" NOT NULL,
    "p2GuidingType" "GuidingType" NOT NULL,
    "obsTitle" TEXT,
    "obsId" TEXT,
    "obsInstrument" TEXT,
    "obsSubtitle" TEXT,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "Target" (
    "pk" SERIAL NOT NULL,
    "id" TEXT,
    "name" TEXT NOT NULL DEFAULT 'Test',
    "coord1" DOUBLE PRECISION NOT NULL,
    "coord2" DOUBLE PRECISION NOT NULL,
    "epoch" TEXT NOT NULL DEFAULT 'J2000.000',
    "type" "TargetType" NOT NULL DEFAULT 'SCIENCE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Target_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "Instrument" (
    "pk" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iaa" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "issPort" INTEGER NOT NULL,
    "focusOffset" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "wfs" "WfsType" NOT NULL DEFAULT 'NONE',
    "originX" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "originY" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "ao" BOOLEAN NOT NULL DEFAULT false,
    "extraParams" JSONB NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "Rotator" (
    "pk" SERIAL NOT NULL,
    "angle" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "tracking" "TrackingType" NOT NULL DEFAULT 'TRACKING',

    CONSTRAINT "Rotator_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "SlewFlags" (
    "pk" SERIAL NOT NULL,
    "zeroChopThrow" BOOLEAN NOT NULL,
    "zeroSourceOffset" BOOLEAN NOT NULL,
    "zeroSourceDiffTrack" BOOLEAN NOT NULL,
    "zeroMountOffset" BOOLEAN NOT NULL,
    "zeroMountDiffTrack" BOOLEAN NOT NULL,
    "shortcircuitTargetFilter" BOOLEAN NOT NULL,
    "shortcircuitMountFilter" BOOLEAN NOT NULL,
    "resetPointing" BOOLEAN NOT NULL,
    "stopGuide" BOOLEAN NOT NULL,
    "zeroGuideOffset" BOOLEAN NOT NULL,
    "zeroInstrumentOffset" BOOLEAN NOT NULL,
    "autoparkPwfs1" BOOLEAN NOT NULL,
    "autoparkPwfs2" BOOLEAN NOT NULL,
    "autoparkOiwfs" BOOLEAN NOT NULL,
    "autoparkGems" BOOLEAN NOT NULL,
    "autoparkAowfs" BOOLEAN NOT NULL,

    CONSTRAINT "SlewFlags_pkey" PRIMARY KEY ("pk")
);
