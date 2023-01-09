import { NgFiles, NgFolders, NgVault } from '../interface';
import {
  NgFilesTable,
  NgFoldersTable,
  NgVaultTableState,
  NgVaultTable,
} from './interface';

export function normalizeNgVault(data: NgVault[]): NgVaultTableState {
  const state = new NgVaultTableState();
  data.forEach((vault) => {
    const Folders = normalizeFolders(vault.Folders, vault.Id, state);
    const vaultTable: NgVaultTable = { ...vault, Folders };
    state.NgVault.push(vaultTable);
  });
  return state;
}

export function normalizeFolders(
  folders: NgFolders[],
  vaultKey: string,
  state: NgVaultTableState
): string[] {
  return folders.map((folder) => {
    const ChildFolders = normalizeFolders(folder.ChildFolders, vaultKey, state);
    const Files = normalizeFiles(folder.Files, vaultKey, state);
    const folderTable: NgFoldersTable = {
      ...folder,
      VaultKey: vaultKey,
      Key: `${vaultKey}~${folder.Id}`,
      ChildFolders,
      Files,
    };
    state.NgFolders.push(folderTable);
    return folder.Id;
  });
}

export function normalizeFiles(
  files: NgFiles[],
  vaultKey: string,
  state: NgVaultTableState
): string[] {
  return files.map((file) => {
    const fileTable: NgFilesTable = {
      ...file,
      VaultKey: vaultKey,
      Key: `${vaultKey}~${file.Id}`,
    };
    state.NgFiles.push(fileTable);
    return file.Id;
  });
}
