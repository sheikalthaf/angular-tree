import { createAction, props } from '@ngrx/store';
import { NgVaultTableState } from './interface';

export const addNgVault = createAction(
  'Add ngVault data',
  props<{ data: NgVaultTableState }>()
);
