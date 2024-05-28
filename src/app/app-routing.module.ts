import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { StoreComponent } from './components/pages/store/store.component';

const routes: Routes = [
  {path: "productos", component: StoreComponent, children: [
    {path: "vapers", component: StoreComponent}
  ]},
  {path: "inicio", component: HomeComponent},
  {path: "", redirectTo: "/inicio", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
