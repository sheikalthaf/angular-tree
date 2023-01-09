import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TREE_DATA } from './data';
import { NgVaultComponent } from './ngvault.component';
import { addNgVault, treeActions } from './store/action';
import { AppState } from './store/interface';
import { normalizeNgVault } from './store/normalizer';
import { selectAllEntities } from './store/selector';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgVaultComponent],
  selector: 'app-root',
  template: `
    <main class="p-4">
      <h1 class="font-bold text-4xl mb-8 text-indigo-600">Angular Ngrx Tree</h1>
      <input
        [formControl]="search"
        placeholder="Search..."
        class="bg-gray-200 w-full p-4 mb-4 rounded-md"
      />
      <app-ngvault
        *ngFor="let vault of vaults$ | async"
        [value]="vault"
      ></app-ngvault>
    </main>
  `,
})
export class AppComponent {
  title = 'angular-tree';

  store = inject<Store<AppState>>(Store<AppState>);

  vaults$ = this.store.select(selectAllEntities);

  search = new FormControl('', { nonNullable: true });

  constructor() {
    const normalizedData = normalizeNgVault(TREE_DATA);
    this.store.dispatch(addNgVault({ data: normalizedData }));
    this.search.valueChanges.subscribe((res) => {
      this.store.dispatch(treeActions.searchtext({ data: res }));
    });
  }
}
