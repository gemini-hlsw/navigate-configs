import { expect } from 'chai';

import type { MutationUpdateGuideAlarmArgs } from '../graphql/gen/index.js';
import { initializeServerFixture } from './setup.js';

describe('GuideAlarm', () => {
  const fixture = initializeServerFixture();

  it('guideAlarms query returns seeded results', async () => {
    const response = await fixture.executeGraphql({
      query: `#graphql
        query guideAlarms {
          guideAlarms {
            OIWFS {
              limit
              enabled
            }
            PWFS1 {
              limit
              enabled
            }
            PWFS2 {
              limit
              enabled
            }
          }
        }`,
      variables: {},
    });

    expect(response.data).deep.equals({
      guideAlarms: {
        OIWFS: {
          enabled: true,
          limit: 900,
        },
        PWFS1: {
          enabled: true,
          limit: 900,
        },
        PWFS2: {
          enabled: true,
          limit: 900,
        },
      },
    });
  });

  it('updateGuideAlarm mutation updates the guide alarm', async () => {
    await fixture.executeGraphql<MutationUpdateGuideAlarmArgs>({
      query: `#graphql
        mutation updateGuideAlarm($wfs: WfsType!, $enabled: Boolean, $limit: Int) {
          updateGuideAlarm(wfs: $wfs, enabled: $enabled, limit: $limit) {
            enabled
            limit
          }
        }`,
      variables: {
        wfs: 'PWFS1',
        enabled: false,
        limit: 1000,
      },
    });

    expect(await fixture.prisma.guideAlarm.findFirstOrThrow({ where: { wfs: 'PWFS1' } })).deep.equals({
      wfs: 'PWFS1',
      enabled: false,
      limit: 1000,
    });
  });
});
