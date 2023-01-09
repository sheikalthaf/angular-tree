import { NgFiles, NgFolders, NgVault } from '../interface';
import { TreeState } from './reducer';

export interface AppState {
  NgVault: TreeState;
}

export interface NgVaultTable extends Omit<NgVault, 'Folders'> {
  Folders: string[];
}

export interface NgFoldersTable
  extends Omit<NgFolders, 'ChildFolders' | 'Files'> {
  ChildFolders: string[];
  Files: string[];
  VaultKey: string;
  Key: string;
}

export interface NgFilesTable extends Omit<NgFiles, 'ChildFolders'> {
  VaultKey: string;
  Key: string;
}

export class NgVaultTableState {
  NgVault: NgVaultTable[] = [];
  NgFolders: NgFoldersTable[] = [];
  NgFiles: NgFilesTable[] = [];
}
