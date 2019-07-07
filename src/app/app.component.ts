import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import * as echarts from 'echarts';
// import { Router, ActivatedRoute } from '@angular/router';
//import {EChartOption} from 'echarts';
//import { Component, NgZone } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
//  constructor(private http: HttpClient, private nes: NgxEchartsService){}
constructor(){
 // this.router.navigateByUrl("/home/e");
 // this.router.navigate([], {relativeTo: this.activeRouter});
  
}

 /* option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params){
          //direct to each province map

        }
        
    },
    series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode: 'multiple',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                {name: '广东', selected: true}
            ]
        }
    ]
};*/

  // public onChartClick(event) {
  //   console.log(event);
  //   console.log(event.data.name);
  //     this.router.navigateByUrl(event.data.webData.path, {
  //       queryParams: {mapName: event.data.webData.path.name},
        
  //     });
    
 //   this.router.navigateByUrl("/jiangsu");
 // }

  
  ngOnInit(){
  //  const echarts=this.nes.echarts;
  // this.http.get('assets/china.json').subscribe(geoJson =>{
  //    echarts.geoJson =
  //  this.get('map/china.json', function (chinaJson) {
      // echarts.registerMap('China', geoJson);  
      
      
  /*     tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}'
        },
      /*  toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}

          }
        },*/
       
       
  }//end of ngOnInit()

  
}
