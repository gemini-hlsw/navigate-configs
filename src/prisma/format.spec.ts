import { deg2dms, deg2hms } from './format.js';
import { expect } from 'chai';

describe(deg2hms.name, () => {
  (
    [
      [0, '00:00:00.000'],
      [-90, '18:00:00.000'],
      [0.25, '00:01:00.000'],
      [0.1, '00:00:24.000'],
    ] as const
  ).forEach(([deg, expected]) => {
    it(`should return ${expected} for ${deg}`, () => {
      expect(deg2hms(deg)).equals(expected);
    });
  });
});

describe(deg2dms.name, () => {
  (
    [
      [0, '00:00:00.000'],
      [360, '00:00:00.000'],
      [450, '90:00:00.000'],
      [-90, '-90:00:00.000'],
      [0.25, '00:15:00.000'],
      [0.01, '00:00:36.000'],
      [270, '-90:00:00.000'],
    ] as const
  ).forEach(([deg, expected]) => {
    it(`should return ${expected} for ${deg}`, () => {
      expect(deg2dms(deg)).equals(expected);
    });
  });
});
