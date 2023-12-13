interface SlewFlagsInput {
  pk?: number
  zeroChopThrow: boolean
  zeroSourceOffset: boolean
  zeroSourceDiffTrack: boolean
  zeroMountOffset: boolean
  zeroMountDiffTrack: boolean
  shortcircuitTargetFilter: boolean
  shortcircuitMountFilter: boolean
  resetPointing: boolean
  stopGuide: boolean
  zeroGuideOffset: boolean
  zeroInstrumentOffset: boolean
  autoparkPwfs1: boolean
  autoparkPwfs2: boolean
  autoparkOiwfs: boolean
  autoparkGems: boolean
  autoparkAowfs: boolean
}

export const INITIAL_SLEW_FLAGS: SlewFlagsInput = {
  zeroChopThrow: true,
  zeroSourceOffset: true,
  zeroSourceDiffTrack: true,
  zeroMountOffset: true,
  zeroMountDiffTrack: true,
  shortcircuitTargetFilter: true,
  shortcircuitMountFilter: true,
  resetPointing: true,
  stopGuide: true,
  zeroGuideOffset: true,
  zeroInstrumentOffset: true,
  autoparkPwfs1: false,
  autoparkPwfs2: false,
  autoparkOiwfs: false,
  autoparkGems: false,
  autoparkAowfs: false,
}
