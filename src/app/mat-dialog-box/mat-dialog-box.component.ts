import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  template: `
    <div>
      <h1>Хотите продолжить чтение этой статьи ?</h1>
      <p class="title-data">{{data.title}}</p>
      <div class="text-align">
        <a class="button" href="{{data.url}}">Да</a>
        <a class="button" (click)="hideBox()">Нет</a>
      </div>
    </div>
  `,
  styleUrls: ['./mat-dialog-box.scss']
})

export class MatDialogBoxComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  public dialogRef: MatDialogRef<MatDialogBoxComponent>) {}
  hideBox() {
    this.dialogRef.close();
  }

}
