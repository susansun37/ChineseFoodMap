import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import * as echarts from 'echarts';
//import {NgxEchartsService} from 'ngx-echarts';

@Component({
  selector: 'app-jiangsu',
  templateUrl: './jiangsu.component.html',
  styleUrls: ['./jiangsu.component.css']
})
export class JiangsuComponent implements OnInit {
 
//  regionOptions;
option;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private http: HttpClient, private router: Router, private activeRouter: ActivatedRoute) { }

  goBack():  void{
    this.location.back();
  }
              
  //console.log(this.location);

  ngOnInit() {
    this.activeRouter.queryParams.subscribe((data) => {
      console.log(data);
      console.log(data.path);
 /* console.log("Echarts:"+this.activeRouter.queryParams.subscribe(params => {
      params['mapName']}));*/
      if (!data || !data.mapName){
        return;
      }
      console.log(data.mapName);
   //   this.http.get('assets/province/jiangsu.json').subscribe(geoJson =>{
        this.http.get('assets/province'+data.path+'.json').subscribe(geoJson =>{
      //  console.log(echarts);
    //    echarts.registerMap('jiangsu', geoJson);
   //     echarts.registerMap(data.path, geoJson);
      
        this.option = {

          layoutCenter: ['60%', '60%'],
          layoutSize: 400,
  
          visualMap:{
            min: 0,
            max: 50,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['#ADCDEF', '#2171C1']
            }
          },

          grid:{
            x:0,
            y:0,
            borderWidth: 1            
           },

  
          series: [
            {
              type: 'map',
              // map: 'china',
  
       //       mapType: 'jiangsu',//consistent with what in registerMap
              mapType: data.mapName,
      //        roam: false,
              itemStyle: {
                normal: {
                  areaColor: '#AAD5EF',
                  borderColor: 'white',
                  label: {show: true, color: 'blue'}
                },
                emphasis:{
                  areaColor: '#A5DABB'
                }
              
            },
            zoom: 1.5,
            data: []
            }
          ]
  
        }
      
      });

    })
    

    

  }

}
