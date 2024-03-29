import { WfsType } from "@prisma/client"

interface InstrumentInput {
  pk?: number
  wfs: WfsType
  iaa: number
  issPort: number
  focusOffset: number
  name: string
  ao: boolean
  originX: number
  originY: number
  extraParams: object
}

export const INITIAL_INSTRUMENTS: InstrumentInput[] = [
  {
    wfs: "NONE",
    iaa: 0,
    issPort: -1,
    focusOffset: 0.0,
    name: "rotator_axis",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "NONE",
    iaa: 0,
    issPort: -1,
    focusOffset: 0.0,
    name: "hrwfs",
    ao: false,
    originX: 1.0,
    originY: -2.5,
    extraParams: {},
  },
  {
    wfs: "NONE",
    iaa: 359.877,
    issPort: 3,
    focusOffset: 0.0,
    name: "GMOS_SOUTH",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "NONE",
    iaa: 359.877,
    issPort: 3,
    focusOffset: 0.0,
    name: "GMOS_NORTH",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "PWFS1",
    iaa: 359.877,
    issPort: 3,
    focusOffset: -0.102,
    name: "GMOS_SOUTH",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "PWFS2",
    iaa: 359.877,
    issPort: 3,
    focusOffset: -0.102,
    name: "GMOS_SOUTH",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "OIWFS",
    iaa: 359.877,
    issPort: 3,
    focusOffset: 0.0,
    name: "GMOS_SOUTH",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "NONE",
    iaa: 359.877,
    issPort: 3,
    focusOffset: -0.102,
    name: "GMOS_SOUTH",
    ao: false,
    originX: 29.41,
    originY: -2.09,
    extraParams: { ifu: true },
  },
  {
    wfs: "PWFS1",
    iaa: 359.877,
    issPort: 3,
    focusOffset: -0.102,
    name: "GMOS_SOUTH",
    ao: false,
    originX: 29.41,
    originY: -2.09,
    extraParams: { ifu: true },
  },
  {
    wfs: "PWFS2",
    iaa: 359.877,
    issPort: 3,
    focusOffset: -0.102,
    name: "GMOS_SOUTH",
    ao: false,
    originX: 29.41,
    originY: -2.09,
    extraParams: { ifu: true },
  },
  {
    wfs: "OIWFS",
    iaa: 359.877,
    issPort: 3,
    focusOffset: 0.0,
    name: "GMOS_SOUTH",
    ao: false,
    originX: 29.41,
    originY: -2.09,
    extraParams: { ifu: true },
  },
  {
    wfs: "NONE",
    iaa: 0.959,
    issPort: 1,
    focusOffset: 0.0,
    name: "GSAOI",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "NONE",
    iaa: 1.573,
    issPort: 5,
    focusOffset: 0.0,
    name: "GSAOI",
    ao: false,
    originX: 2.77,
    originY: -3.53,
    extraParams: {},
  },
  {
    wfs: "NONE",
    iaa: 0.17,
    issPort: 5,
    focusOffset: 0.0,
    name: "FLAMINGOS2",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "PWFS2",
    iaa: 0.17,
    issPort: 5,
    focusOffset: -0.047,
    name: "FLAMINGOS2",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "NONE",
    iaa: 359.95,
    issPort: 1,
    focusOffset: -0.1,
    name: "GHOST",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "PWFS2",
    iaa: 359.95,
    issPort: 1,
    focusOffset: -0.1,
    name: "GHOST",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "NONE",
    iaa: 359.87,
    issPort: 5,
    focusOffset: 0.0,
    name: "GHOST",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "PWFS2",
    iaa: 359.87,
    issPort: 5,
    focusOffset: -0.102,
    name: "GHOST",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "NONE",
    iaa: 269.2,
    issPort: 5,
    focusOffset: -0.175,
    name: "PHOENIX",
    ao: false,
    originX: 4.37,
    originY: -9.32,
    extraParams: {},
  },
  {
    wfs: "NONE",
    iaa: 90,
    issPort: 1,
    focusOffset: -0.2,
    name: "VISITOR",
    ao: false,
    originX: 0.0,
    originY: 0.0,
    extraParams: {},
  },
  {
    wfs: "NONE",
    iaa: 0,
    issPort: 2,
    focusOffset: -0.19,
    name: "VISITOR",
    ao: false,
    originX: 0.5,
    originY: -31.3,
    extraParams: {},
  },
]

interface GemsInstrumentType {
  pk?: number
  beamsplitter: string
  adc: boolean
  astrometricMode: string
}

export const INITIAL_GEMS_INSTRUMENT: GemsInstrumentType = {
  beamsplitter: "400 nm",
  adc: true,
  astrometricMode: "Best",
}

interface AltairInstrumentType {
  pk?: number
  beamsplitter: string
  startMagnitude: number
  seeing: number
  windSpeed: number
  forceMode: boolean
  ndFilter: boolean
  fieldLens: boolean
  deployAdc: boolean
  adjustAdc: boolean
  lgs: boolean
}

export const INITIAL_ALTAIR_INSTRUMENT: AltairInstrumentType = {
  beamsplitter: "400 nm",
  startMagnitude: 10.0,
  seeing: 0.8,
  windSpeed: 20,
  forceMode: true,
  ndFilter: true,
  fieldLens: true,
  deployAdc: true,
  adjustAdc: true,
  lgs: true,
}
