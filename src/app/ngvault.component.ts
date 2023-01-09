import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgVault } from './interface';
import { NgFolderComponent } from './ngfolder.component';

@Component({
  standalone: true,
  imports: [CommonModule, NgFolderComponent],
  selector: 'app-ngvault',
  template: `
    <h4 class="font-bold p-4 bg-gray-200 rounded-md sticky top-0">
      {{ value.Name }}
    </h4>
    <app-ngfolder
      *ngFor="let folder of value.Folders"
      [value]="folder"
      [index]="1"
    ></app-ngfolder>
  `,
})
export class NgVaultComponent implements OnInit {
  @Input() value!: NgVault;

  constructor() {}

  ngOnInit() {}
}
