import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from '../../../shared/services/product-service.service';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;
  
  constructor(private productService: ProductService, private route: ActivatedRoute, private shoppingCartService: ShoppingCartService) {  }
    
    async ngOnInit() {
      this.cart$ = await this.shoppingCartService.getCart();
      this.populateProducts();      
    }
    
    private populateProducts() {
      this.productService.getAll()
      .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();        
      });
    }
    
    private applyFilter() {
      this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products;
    }
  }
