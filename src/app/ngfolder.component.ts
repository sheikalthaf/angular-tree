import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgFolders, NgVault } from './interface';
import { NgFilesComponent } from './ngfiles.component';

@Component({
  standalone: true,
  imports: [CommonModule, NgFilesComponent],
  selector: 'app-ngfolder',
  template: ` <div [ngStyle]="{ 'margin-left': index * 20 + 'px' }">
    <h4 class="font-bold py-2">{{ value.Name }}</h4>
    <app-ngfiles
      *ngFor="let file of value.Files"
      [value]="file"
      [index]="index + 1"
    ></app-ngfiles>
    <app-ngfolder
      *ngFor="let folder of value.ChildFolders"
      [value]="folder"
      [index]="index + 1"
    ></app-ngfolder>
  </div>`,
})
export class NgFolderComponent implements OnInit {
  @Input() value!: NgFolders;

  @Input() index!: number;

  constructor() {}

  ngOnInit() {}
}
