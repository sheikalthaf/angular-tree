import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NgFiles, NgVault } from './interface';
import { fileActions } from './store/action';
import { AppState } from './store/interface';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-ngfiles',
  template: `
    <div [ngStyle]="{ marginLeft: index * 20 + 'px' }" class="flex gap-2 py-1">
      <ng-container *ngIf="!isEdit">
        <h4 class="text-slate-500">{{ value.Name }}</h4>
        <button
          class="border text-xs bg-gray-300 px-1 rounded-md"
          (click)="toggleEdit()"
        >
          Edit
        </button>
      </ng-container>
      <ng-container *ngIf="isEdit">
        <input [formControl]="name" class="border" />
        <button
          class="border text-xs bg-gray-300 px-1 rounded-md"
          (click)="save()"
        >
          Save
        </button>
      </ng-container>
    </div>
  `,
})
export class NgFilesComponent implements OnInit {
  @Input() value!: NgFiles;

  @Input() index!: number;

  store = inject<Store<AppState>>(Store);

  name = new FormControl<string>('', { nonNullable: true });

  isEdit = false;

  constructor() {}

  ngOnInit() {}

  toggleEdit() {
    if (!this.isEdit) {
      this.name.patchValue(this.value.Name);
    }
    this.isEdit = !this.isEdit;
  }

  save() {
    const data = { ...this.value, Name: this.name.value };
    this.store.dispatch(fileActions.edit({ data }));
  }
}
