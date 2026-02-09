import * as migration_20260204_131925 from './20260204_131925';
import * as migration_20260204_133611 from './20260204_133611';

export const migrations = [
  {
    up: migration_20260204_131925.up,
    down: migration_20260204_131925.down,
    name: '20260204_131925',
  },
  {
    up: migration_20260204_133611.up,
    down: migration_20260204_133611.down,
    name: '20260204_133611'
  },
];
