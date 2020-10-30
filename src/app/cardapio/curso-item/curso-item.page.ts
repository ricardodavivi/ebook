import { Component, Input } from '@angular/core';
import { ICardapioProduct } from './../shared/icardapio';
@Component({
  selector: 'app-curso-item',
  templateUrl: './curso-item.page.html',
  styleUrls: ['./curso-item.page.scss'],
})
export class CursoItemPage  {
  @Input()
  product: ICardapioProduct;

  constructor() { }

  

}
 