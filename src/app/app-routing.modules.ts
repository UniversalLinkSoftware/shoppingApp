import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';


const appRoute: Routes = [{path: '', redirectTo: '/products', pathMatch: 'full'},
{path: 'products', component: ProductsComponent, children: [
    {path: '', component: ProductStartComponent},
    {path: 'new', component: ProductEditComponent},
    {path: ':id', component: ProductDetailComponent},
    {path: ':id/edit', component: ProductEditComponent}
]},
{path: 'shoppinglist', component: ShoppingListComponent}
];

@NgModule({
imports: [RouterModule.forRoot(appRoute)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
