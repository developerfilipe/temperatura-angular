import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/chover/page/home/home.component';

const routes: Routes = [
  {
    //quando nao houver path
    path  :  "",
    //redireciona para
    redirectTo : "home",
    //
    pathMatch : "full"
  },
  {
    path : "home",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
