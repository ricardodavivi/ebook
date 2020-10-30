import { ShoppingCartService } from './shared/shopping-cart.service';
import { IShoppingCartModel } from './shared/ishopping-cart-model';
import { ToastService } from './../core/services/toast.service';
import { CardapioService } from './../cardapio/shared/cardapio.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  pdfSrc = "http://localhost:3000/4cad0b61-4492-4c6f-9d7a-560110c1845f.pdf";

  model: IShoppingCartModel = {
    product: {},
    quantity: 1
  };

  productId: string;
  itemId?: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cardapioService: CardapioService,
    private toastService: ToastService,
    private shoppingCartService: ShoppingCartService,
    
  ) { }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.loadProduct();
    

    const itemId = this.activatedRoute.snapshot.paramMap.get('itemId');
    if (itemId) {
      this.itemId = parseInt(itemId, 10);
      this.loadItem();
      
      
    }
  }

  async loadProduct() {
    try {
      const result = await this.cardapioService.getById(this.productId);
      if (result) {
        this.model.product._id = this.productId;
        this.model.product.description = result.description;
        this.model.product.name = result.name;
        this.model.product.pdfUrl = result.pdfUrl;
        this.model.product.price = result.price;
      }
      console.log(result)
      
    } catch (error) {
      this.toastService.showError('Ocorreu algum erro ao tentar buscar as informações do produto');
    }
  }

  loadItem() {
    const result = this.shoppingCartService.get(this.itemId);
    if (result) {
      this.model.id = result.id;
      this.model.note = result.note;
      this.model.quantity = result.quantity;
    }
    console.log(result);
  }
  
  
}
