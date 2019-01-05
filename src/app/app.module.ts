import { DataStorageService } from './common/data-storage.service';
import { ProductService } from './products/product.service';
import { AppRoutingModule } from './app-routing.modules';
import { ShoppingListService } from './shopping-list/shopping.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './common/dropdown.directive';
import { RouterModule, Routes } from '@angular/router';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    ProductStartComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, ProductService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
