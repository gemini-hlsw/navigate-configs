import { Prisma } from '@prisma/client';

export const INITIAL_GUIDE_LOOP: Prisma.GuideLoopCreateInput = {
  m2TipTiltEnable: true,
  m2TipTiltSource: 'PWFS1',
  m2FocusEnable: true,
  m2FocusSource: 'PWFS2',
  m2TipTiltFocusLink: true,
  m2ComaEnable: true,
  m1CorrectionsEnable: true,
  m2ComaM1CorrectionsSource: 'OIWFS',
  mountOffload: true,
  daytimeMode: true,
  probeTracking: 'PWFS1',
  lightPath: 'Sky ➡ AO ➡ AC',
};

export const INITIAL_ALTAIR_GUIDE_LOOP: Prisma.AltairGuideLoopCreateInput = {
  aoEnabled: true,
  oiBlend: true,
  focus: true,
  p1Ttf: true,
  strap: true,
  oiTtf: true,
  ttgs: true,
  sfo: true,
};

export const INITIAL_GEMS_GUIDE_LOOP: Prisma.GemsGuideLoopCreateInput = {
  aoEnabled: true,
  focus: true,
  rotation: true,
  tipTilt: true,
  anisopl: true,
  flexure: true,
};
