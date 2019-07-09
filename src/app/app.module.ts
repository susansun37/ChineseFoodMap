import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MineComponent } from './mine/mine.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {HttpClientModule} from '@angular/common/http';
import { JiangsuComponent } from './jiangsu/jiangsu.component';

import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { MyFavoriteComponent } from './my-favorite/my-favorite.component';
import { MySettingComponent } from './my-setting/my-setting.component';
import { HomeComponent } from './home/home.component';  //导入路由
//import {appRoutes} from './app-routing.module';


const appRoutes: Routes = [
  // {path: 'jiangsu', component: JiangsuComponent},
  // {path: 'xinjiang', component: JiangsuComponent}
  {path: ':id', component: JiangsuComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MineComponent,
    JiangsuComponent,
    MyFavoriteComponent,
    MySettingComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    HttpClientModule,
    FormsModule,
  //  HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
