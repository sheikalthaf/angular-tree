import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { NgFoldersTable } from './interface';

export interface NgFolderState extends EntityState<NgFoldersTable> {
  // additional entities state properties
  selectedNgFolderId: string | null;
}

export function selectNgFolderId(a: NgFoldersTable): string {
  //In this case this would be optional since primary key is id
  return a.Id;
}

// export function sortByName(a: User, b: User): number {
//   return a.name.localeCompare(b.name);
// }

export const ngFolderAdapter: EntityAdapter<NgFoldersTable> =
  createEntityAdapter<NgFoldersTable>({
    selectId: selectNgFolderId,
    // sortComparer: sortByName,
  });

export const ngFolderInitialState =
  ngFolderAdapter.getInitialState<NgFolderState>({
    selectedNgFolderId: '',
    entities: {},
    ids: [],
  });

// SELECTORS
export const {
  selectIds: selectedNgFolder,
  selectEntities: selectNgFolderEntities,
  selectAll: selectNgFolderAll,
} = ngFolderAdapter.getSelectors();
