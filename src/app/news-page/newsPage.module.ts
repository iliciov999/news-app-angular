import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsPageComponent } from './newsPage.component';
import {AppRoutingModule} from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogBoxComponent } from '../mat-dialog-box/mat-dialog-box.component';
@NgModule({
  declarations: [
    NewsPageComponent,
    MatDialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    NewsPageComponent
  ],
  providers: []
})
export class NewsPageModule {}
