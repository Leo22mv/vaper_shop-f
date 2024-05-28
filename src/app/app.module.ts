import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/pages/home/banner/banner.component';
import { StoreComponent } from './components/pages/store/store.component';
import { ProductListComponent } from './components/pages/store/product-list/product-list.component';
import { ProductComponent } from './components/pages/store/product-list/product/product.component';
import { CategoryComponent } from './components/pages/store/filters/category/category.component';
import { PriceComponent } from './components/pages/store/filters/price/price.component';
import { PaginationComponent } from './components/pages/store/pagination/pagination.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    StoreComponent,
    ProductListComponent,
    ProductComponent,
    CategoryComponent,
    PriceComponent,
    PaginationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
