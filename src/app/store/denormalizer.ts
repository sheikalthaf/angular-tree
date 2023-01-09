import { Dictionary } from '@ngrx/entity';
import { NgFiles, NgFolders, NgVault } from '../interface';
import { NgFilesTable, NgFoldersTable, NgVaultTable } from './interface';

interface NgVaultInput {
  searchText: string;
  ngVaults: string[];
  ngVaultsEntities: Dictionary<NgVaultTable>;
  ngFolderEntities: Dictionary<NgFoldersTable>;
  ngFilesEntities: Dictionary<NgFilesTable>;
}

export function denormalizeNgVaults(data: NgVaultInput) {
  return data.ngVaults.reduce<NgVault[]>((acc, id) => {
    const value = data.ngVaultsEntities[id] as NgVaultTable;
    const Folders = denormalizeNgFolders(value?.Folders, data);
    const ngVault: NgVault = { ...value, Folders };
    acc.push(ngVault);
    return acc;
  }, []);
}

export function denormalizeNgFolders(ids: string[], data: NgVaultInput) {
  return ids.reduce<NgFolders[]>((acc, id) => {
    const value = data.ngFolderEntities[id] as NgFoldersTable;
    const ChildFolders = denormalizeNgFolders(value?.ChildFolders, data);
    const Files = denormalizeNgFiles(value?.Files, data);
    if (
      ChildFolders.length ||
      value.Name.toLowerCase().includes(data.searchText)
    ) {
      const ngFolder: NgFolders = { ...value, ChildFolders, Files };
      acc.push(ngFolder);
    }
    return acc;
  }, []);
}

export function denormalizeNgFiles(ids: string[], data: NgVaultInput) {
  return ids.reduce<NgFiles[]>((acc, id) => {
    const value = data.ngFilesEntities[id] as NgFilesTable;
    const ngFiles: NgFiles = { ...value };
    acc.push(ngFiles);
    return acc;
  }, []);
}
