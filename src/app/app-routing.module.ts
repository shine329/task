
import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './card/card.component';
import { WindowComponent } from './window/window.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'window',
    component:WindowComponent,
  },
  {
    path:'card',
    component:CardComponent,
  },
  {
    path:'detail',
    component:DetailComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
