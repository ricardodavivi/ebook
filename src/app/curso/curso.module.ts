import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from './../core/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoPageRoutingModule } from './curso-routing.module';

import { CursoPage } from './curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoPageRoutingModule,
    SharedModule,
    PdfViewerModule
  ],
  declarations: [CursoPage]
})
export class CursoPageModule {}
