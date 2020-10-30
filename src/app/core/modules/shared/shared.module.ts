import { CursoItemPage } from './../../../cardapio/curso-item/curso-item.page';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardapioItemComponent } from './../../../cardapio/cardapio-item/cardapio-item.component';


@NgModule({
  declarations: [
    CardapioItemComponent,
    CursoItemPage
    
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CardapioItemComponent,
    CursoItemPage
    
    
  ]
})
export class SharedModule { }
