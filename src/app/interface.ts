export interface NgVault {
  Id: string;
  Name: string;
  Folders: NgFolders[];
}

export interface NgFolders {
  Id: string;
  Name: string;
  ChildFolders: NgFolders[];
  Files: NgFiles[];
}

export interface NgFiles {
  Id: string;
  Name: string;
}
