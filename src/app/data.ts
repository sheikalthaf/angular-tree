import { NgVault } from './interface';

export const TREE_DATA: NgVault[] = [
  {
    Id: '1',
    Name: 'Public Vault',
    Folders: [
      {
        ChildFolders: [
          {
            ChildFolders: [],
            Files: [
              {
                Id: 'Nested files1',
                Name: 'Nested File 1',
              },
              {
                Id: 'Nested files2',
                Name: 'Nested File 2',
              },
            ],
            Id: '1234',
            Name: 'Nested folder',
          },
          {
            ChildFolders: [],
            Files: [],
            Id: '12345',
            Name: 'Nested folder One',
          },
          {
            ChildFolders: [],
            Files: [],
            Id: '123456',
            Name: 'Nested folder Two',
          },
          {
            ChildFolders: [],
            Files: [],
            Id: '1234567',
            Name: 'Nested folder Three',
          },
          {
            ChildFolders: [],
            Files: [],
            Id: '1234568',
            Name: 'Nested folder Four',
          },
          {
            ChildFolders: [],
            Files: [],
            Id: '1234569',
            Name: 'Nested folder Five',
          },
        ],
        Files: [
          {
            Id: 'files1',
            Name: 'File 1',
          },
          {
            Id: 'files2',
            Name: 'File 2',
          },
        ],
        Id: '123',
        Name: 'Folder',
      },
    ],
  },
  {
    Id: '2',
    Name: 'Private Vault',
    Folders: [
      {
        ChildFolders: [
          {
            ChildFolders: [],
            Files: [
              {
                Id: 'Private Nested files1',
                Name: 'Private Nested File 1',
              },
              {
                Id: 'Private Nested files2',
                Name: 'Private Nested File 2',
              },
            ],
            Id: 'Private 1234',
            Name: 'Private Nested folder',
          },
        ],
        Files: [
          {
            Id: 'Private files1',
            Name: 'Private File 1',
          },
          {
            Id: 'Private files2',
            Name: 'Private File 2',
          },
        ],
        Id: 'Private 123',
        Name: 'Private Folder',
      },
      {
        ChildFolders: [],
        Files: [],
        Id: 'private12345',
        Name: 'Private Folder One',
      },
      {
        ChildFolders: [],
        Files: [],
        Id: 'private123456',
        Name: 'Private Folder Two',
      },
      {
        ChildFolders: [],
        Files: [],
        Id: 'private1234567',
        Name: 'Private Folder Three',
      },
      {
        ChildFolders: [],
        Files: [],
        Id: 'private1234568',
        Name: 'Private Folder Four',
      },
      {
        ChildFolders: [],
        Files: [],
        Id: 'private1234569',
        Name: 'Private Folder Five',
      },
    ],
  },
];
