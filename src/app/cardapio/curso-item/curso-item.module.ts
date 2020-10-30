import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoItemPageRoutingModule } from './curso-item-routing.module';

import { CursoItemPage } from './curso-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoItemPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [CursoItemPage]
})
export class CursoItemPageModule {}
