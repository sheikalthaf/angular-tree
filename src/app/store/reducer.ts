import { Action, createReducer, on } from '@ngrx/store';
import { addNgVault } from './action';
import { ngFilesAdapter, ngFilesInitialState } from './ngfiles';
import { ngFolderAdapter, ngFolderInitialState } from './ngfolder';
import { ngVaultAdapter, ngVaultInitialState } from './ngvault';

class NgVaultStateI {
  ngVaults = ngVaultInitialState;
  ngFolders = ngFolderInitialState;
  ngFiles = ngFilesInitialState;
}

export class TreeState extends NgVaultStateI {}

const initialState: TreeState = {
  ...new NgVaultStateI(),
};

const _vaultReducer = createReducer(
  initialState,
  on(addNgVault, (state, { data }) => {
    console.log(data);
    return {
      ...state,
      ngVaults: ngVaultAdapter.setAll(data.NgVault, state.ngVaults),
      ngFolders: ngFolderAdapter.setAll(data.NgFolders, state.ngFolders),
      ngFiles: ngFilesAdapter.setAll(data.NgFiles, state.ngFiles),
    };
  })
);

export function vaultReducer(state: TreeState | undefined, action: Action) {
  return _vaultReducer(state, action);
}
