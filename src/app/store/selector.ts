import { createSelector } from '@ngrx/store';
import { denormalizeNgVaults } from './denormalizer';
import { AppState } from './interface';
import {
  selectedNgFiles,
  selectNgFilesAll,
  selectNgFilesEntities,
} from './ngfiles';
import {
  selectedNgFolder,
  selectNgFolderAll,
  selectNgFolderEntities,
} from './ngfolder';
import {
  selectedNgVault,
  selectNgVaultAll,
  selectNgVaultEntities,
} from './ngvault';

export const selectTreeState = (state: AppState) => state.NgVault;

export const selectNgVaultState = createSelector(
  selectTreeState,
  (state) => state.ngVaults
);

export const selectNgFolderState = createSelector(
  selectTreeState,
  (state) => state.ngFolders
);

export const selectNgFilesState = createSelector(
  selectTreeState,
  (state) => state.ngFiles
);

export const selectNgVaultIds = createSelector(
  selectNgVaultState,
  selectedNgVault
);

export const selectNgVaultEntity = createSelector(
  selectNgVaultState,
  selectNgVaultEntities
);

export const selectNgVaults = createSelector(
  selectNgVaultState,
  selectNgVaultAll
);

export const selectNgFolderIds = createSelector(
  selectNgFolderState,
  selectedNgFolder
);

export const selectNgFolderEntity = createSelector(
  selectNgFolderState,
  selectNgFolderEntities
);

export const selectNgFolders = createSelector(
  selectNgFolderState,
  selectNgFolderAll
);

export const selectNgFilesIds = createSelector(
  selectNgFilesState,
  selectedNgFiles
);

export const selectNgFilesEntity = createSelector(
  selectNgFilesState,
  selectNgFilesEntities
);

export const selectNgFiless = createSelector(
  selectNgFilesState,
  selectNgFilesAll
);

export const selectAllEntities = createSelector(
  selectNgVaultIds,
  selectNgVaultEntity,
  selectNgFolderEntity,
  selectNgFilesEntity,
  (ngVaults, ngVaultsEntities, ngFolderEntities, ngFilesEntities) => {
    const data = {
      ngVaults: ngVaults as string[],
      ngVaultsEntities,
      ngFolderEntities,
      ngFilesEntities,
    };
    return denormalizeNgVaults(data);
  }
);
