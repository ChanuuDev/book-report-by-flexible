import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {Post01Component} from "./posts/post01/post01.component";

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'post01', component: Post01Component},
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'top', })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
