import { GuidingType, SiteType } from "@prisma/client"

interface ConfigurationInput {
  pk?: number
  site: SiteType
  selectedTarget?: number
  selectedOiTarget?: number
  selectedP1Target?: number
  selectedP2Target?: number
  oiGuidingType: GuidingType
  p1GuidingType: GuidingType
  p2GuidingType: GuidingType
  obsTitle?: string
  obsId?: string
  obsInstrument?: string
  obsSubtitle?: string
}

export const INITIAL_CONFIGURATION: ConfigurationInput = {
  site: "GN",
  oiGuidingType: "NORMAL",
  p1GuidingType: "NORMAL",
  p2GuidingType: "NORMAL",
}
