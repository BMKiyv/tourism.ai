import * as migration_20260309_222607_init from './20260309_222607_init';
import * as migration_20260309_222943_full_init from './20260309_222943_full_init';
import * as migration_20260309_223530_add_name_field from './20260309_223530_add_name_field';

export const migrations = [
  {
    up: migration_20260309_222607_init.up,
    down: migration_20260309_222607_init.down,
    name: '20260309_222607_init',
  },
  {
    up: migration_20260309_222943_full_init.up,
    down: migration_20260309_222943_full_init.down,
    name: '20260309_222943_full_init',
  },
  {
    up: migration_20260309_223530_add_name_field.up,
    down: migration_20260309_223530_add_name_field.down,
    name: '20260309_223530_add_name_field'
  },
];
