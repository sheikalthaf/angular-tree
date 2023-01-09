import { Action, createReducer, on } from '@ngrx/store';
import { addNgVault, fileActions, treeActions } from './action';
import { NgFilesTable } from './interface';
import { ngFilesAdapter, ngFilesInitialState } from './ngfiles';
import { ngFolderAdapter, ngFolderInitialState } from './ngfolder';
import { ngVaultAdapter, ngVaultInitialState } from './ngvault';

class NgVaultStateI {
  ngVaults = ngVaultInitialState;
  ngFolders = ngFolderInitialState;
  ngFiles = ngFilesInitialState;
}

export class TreeState extends NgVaultStateI {
  searchText: string = '';
}

const initialState: TreeState = {
  ...new NgVaultStateI(),
  searchText: '',
};

const _vaultReducer = createReducer(
  initialState,
  on(addNgVault, (state, { data }) => {
    return {
      ...state,
      ngVaults: ngVaultAdapter.setAll(data.NgVault, state.ngVaults),
      ngFolders: ngFolderAdapter.setAll(data.NgFolders, state.ngFolders),
      ngFiles: ngFilesAdapter.setAll(data.NgFiles, state.ngFiles),
    };
  }),
  on(treeActions.searchtext, (state, { data }) => ({
    ...state,
    searchText: data,
  })),
  on(fileActions.edit, (state, { data }) => {
    const filesTable = {
      ...state.ngFiles.entities[data.Id],
      Name: data.Name,
    } as NgFilesTable;
    const files = ngFilesAdapter.upsertOne(filesTable, state.ngFiles);
    return { ...state, ngFiles: files };
  })
);

export function vaultReducer(state: TreeState | undefined, action: Action) {
  return _vaultReducer(state, action);
}
