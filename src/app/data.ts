import { NgVault } from './interface';

export const TREE_DATA: NgVault[] = [
  {
    Id: '1',
    Name: 'Public Vault',
    Folders: [
      {
        ChildFolders: [],
        Files: [],
        Id: '123',
        Name: 'testing',
      },
    ],
  },
  {
    Id: '2',
    Name: 'Private Vault',
    Folders: [],
  },
];
