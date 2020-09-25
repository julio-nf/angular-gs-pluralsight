import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { IProducts } from './product';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.productUrl).pipe(
        tap(data => console.log('All' + JSON.stringify(data))),
        catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProducts | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProducts[]) => products.find(p => p.productId === id))
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {

    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
        errorMsg = `An error ocurred: ${err.error.message}`;
    } else {
        errorMsg = `Server returned code: ${err.status}, error message is: ${err.error.message}`;
    }

    console.error(errorMsg);
    return throwError(errorMsg);
  }
}
