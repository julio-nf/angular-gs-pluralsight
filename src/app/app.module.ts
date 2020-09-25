import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarsComponent } from './shared/stars.component';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-list/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './product-list/product-detail.guard';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarsComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
