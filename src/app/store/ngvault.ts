import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { NgVaultTable } from './interface';

export interface NgVaultState extends EntityState<NgVaultTable> {
  // additional entities state properties
  selectedNgVaultId: string | null;
}

export function selectNgVaultId(a: NgVaultTable): string {
  //In this case this would be optional since primary key is id
  return a.Id;
}

// export function sortByName(a: User, b: User): number {
//   return a.name.localeCompare(b.name);
// }

export const ngVaultAdapter: EntityAdapter<NgVaultTable> =
  createEntityAdapter<NgVaultTable>({
    selectId: selectNgVaultId,
    // sortComparer: sortByName,
  });

export const ngVaultInitialState = ngVaultAdapter.getInitialState<NgVaultState>(
  {
    selectedNgVaultId: '',
    entities: {},
    ids: [],
  }
);

// SELECTORS
export const {
  selectIds: selectedNgVault,
  selectEntities: selectNgVaultEntities,
  selectAll: selectNgVaultAll,
} = ngVaultAdapter.getSelectors();
