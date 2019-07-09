import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JiangsuComponent} from './jiangsu/jiangsu.component';
import {HomeComponent} from './home/home.component';
//import {map} from './map';//write later

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component:JiangsuComponent},
  {path: 'home', component: HomeComponent},
//  {path: 'xinjiang', component:JiangsuComponent},
//  {path: 'zhejiang', component:JiangsuComponent}
  // {path: 'home', redirectTo: '', pathMatch: 'full', children: [
  //   {path: '', component: homecomponent},
  //   {path:':id', component: JiangsuComponent}
  // ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
