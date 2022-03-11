import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {Post01Component} from "./posts/post01/post01.component";
import {Post02Component} from "./posts/post02/post02.component";
import {Post03Component} from "./posts/post03/post03.component";

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'post01', component: Post01Component},
  {path: 'post02', component: Post02Component},
  {path: 'post03', component: Post03Component},
  {path: '**', redirectTo: 'main'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'top',})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
