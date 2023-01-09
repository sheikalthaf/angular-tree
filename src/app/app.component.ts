import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TREE_DATA } from './data';
import { NgVaultComponent } from './ngvault.component';
import { addNgVault } from './store/action';
import { AppState } from './store/interface';
import { normalizeNgVault } from './store/normalizer';
import { selectAllEntities } from './store/selector';

@Component({
  standalone: true,
  imports: [CommonModule, NgVaultComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-tree';

  store = inject<Store<AppState>>(Store<AppState>);

  vaults$ = this.store.select(selectAllEntities);

  constructor() {
    const normalizedData = normalizeNgVault(TREE_DATA);
    this.store.dispatch(addNgVault({ data: normalizedData }));
  }
}
