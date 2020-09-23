import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  pageTitle = 'Product List';
  showImage = false;
  listFilter = '';
  products: Products[] = [
    new Products(
      1,
      'Leaf Rake',
      'GDN-0011',
      'March 19, 2019',
      'Leaf rake with 48-inch wooden handle.',
      19.95,
      3.2,
      'assets/images/leaf_rake.png'
    ),
    new Products(
      2,
      'Garden Cart',
      'GDN-0023',
      'March 18, 2019',
      '15 gallon capacity rolling garden cart',
      32.99,
      4.2,
      'assets/images/garden_cart.png'
    )];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  getProducts(): Products[] {
      return this.products.filter(
        x => x.productName.includes(this.listFilter));
  }
}

class Products {

  constructor(
    public productId: number,
    public productName: string,
    public productCode: string,
    public releaseDate: string,
    public description: string,
    public price: number,
    public starRating: number,
    public imageUrl: string
  ) {}
}
