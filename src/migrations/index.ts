import * as migration_20260414_223908_init_serial from './20260414_223908_init_serial';

export const migrations = [
  {
    up: migration_20260414_223908_init_serial.up,
    down: migration_20260414_223908_init_serial.down,
    name: '20260414_223908_init_serial'
  },
];
