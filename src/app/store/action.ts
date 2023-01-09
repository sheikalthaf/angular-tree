import { createAction, createActionGroup, props } from '@ngrx/store';
import { NgFiles } from '../interface';
import { NgVaultTableState } from './interface';

export const addNgVault = createAction(
  'Add ngVault data',
  props<{ data: NgVaultTableState }>()
);

export const fileActions = createActionGroup({
  source: 'file actions',
  events: {
    edit: props<{ data: NgFiles }>(),
  },
});

export const treeActions = createActionGroup({
  source: 'tree actions',
  events: {
    searchText: props<{ data: string }>(),
  },
});
