import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { NgFilesTable } from './interface';

export interface NgFilesState extends EntityState<NgFilesTable> {
  // additional entities state properties
  selectedNgFilesId: string | null;
}

export function selectNgFilesId(a: NgFilesTable): string {
  //In this case this would be optional since primary key is id
  return a.Id;
}

// export function sortByName(a: User, b: User): number {
//   return a.name.localeCompare(b.name);
// }

export const ngFilesAdapter: EntityAdapter<NgFilesTable> =
  createEntityAdapter<NgFilesTable>({
    selectId: selectNgFilesId,
    // sortComparer: sortByName,
  });

export const ngFilesInitialState = ngFilesAdapter.getInitialState<NgFilesState>(
  {
    selectedNgFilesId: '',
    entities: {},
    ids: [],
  }
);

// SELECTORS
export const {
  selectIds: selectedNgFiles,
  selectEntities: selectNgFilesEntities,
  selectAll: selectNgFilesAll,
} = ngFilesAdapter.getSelectors();
