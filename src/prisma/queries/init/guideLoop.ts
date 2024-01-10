interface GuideLoopType {
  pk?: number
  m2TipTiltEnable: boolean
  m2TipTiltSource: string
  m2FocusEnable: boolean
  m2FocusSource: string
  m2TipTiltFocusLink: boolean
  m2ComaEnable: boolean
  m1CorrectionsEnable: boolean
  m2ComaM1CorrectionsSource: string
  mountOffload: boolean
  daytimeMode: boolean
  probeTracking: string
  lightPath: string
}

export const INITIAL_GUIDE_LOOP: GuideLoopType = {
  m2TipTiltEnable: true,
  m2TipTiltSource: "PWFS1",
  m2FocusEnable: true,
  m2FocusSource: "PWFS2",
  m2TipTiltFocusLink: true,
  m2ComaEnable: true,
  m1CorrectionsEnable: true,
  m2ComaM1CorrectionsSource: "OIWFS",
  mountOffload: true,
  daytimeMode: true,
  probeTracking: "PWFS1",
  lightPath: "Sky ➡ AO ➡ AC",
}

interface AltairGuideLoopType {
  pk?: number
  aoEnabled: boolean
  oiBlend: boolean
  focus: boolean
  p1Ttf: boolean
  strap: boolean
  oiTtf: boolean
  ttgs: boolean
  sfo: boolean
}

export const INITIAL_ALTAIR_GUIDE_LOOP: AltairGuideLoopType = {
  aoEnabled: true,
  oiBlend: true,
  focus: true,
  p1Ttf: true,
  strap: true,
  oiTtf: true,
  ttgs: true,
  sfo: true,
}

interface GemsGuideLoopType {
  pk?: number
  aoEnabled: boolean
  focus: boolean
  rotation: boolean
  tipTilt: boolean
  anisopl: boolean
  flexure: boolean
}

export const INITIAL_GEMS_GUIDE_LOOP: GemsGuideLoopType = {
  aoEnabled: true,
  focus: true,
  rotation: true,
  tipTilt: true,
  anisopl: true,
  flexure: true,
}
