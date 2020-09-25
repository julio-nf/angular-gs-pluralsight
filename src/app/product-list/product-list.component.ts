import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { IProducts } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  showImage = false;
  listFilter = '';
  products: IProducts[];
  errorMsg: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMsg = err
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  get listProducts(): IProducts[] {
      return this.products.filter(
        x => x.productName.toLowerCase().includes(this.listFilter.toLowerCase()));
  }

  onRatingClicked(message: string): void {
    this.pageTitle = this.pageTitle + `: ${message}`;
  }
}
