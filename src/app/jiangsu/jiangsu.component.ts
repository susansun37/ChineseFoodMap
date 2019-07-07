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
  private jiangsuUrl = 'api/jiangsu';

  constructor(/*private route: ActivatedRoute,*/
              private location: Location,
              private http: HttpClient, private router: Router, private activeRouter: ActivatedRoute) { }

  goBack():  void{
    this.location.back();
  }
              
  //console.log(this.location);

  ngOnInit() {
    this.activeRouter.queryParams.subscribe((data) => {
      console.log("Echarts data: "+this.router);

      this.http.get('assets/province/jiangsu.json').subscribe(geoJson =>{
      //  console.log(echarts);
        echarts.registerMap('jiangsu', geoJson);
      
        this.option = {
  
       /*   visualMap:{
            min: 0,
            max: 50,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['#ADCDEF', '#2171C1']
            }
          },*/
  
          series: [
            {
              type: 'map',
              // map: 'china',
  
              mapType: '江苏',//consistent with what in registerMap
         //     mapType: event.data.name;
              roam: false,
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
            zoom: 1.2,
            data: []
            }
          ]
  
        }
      
      });

    })
    

    

  }

}
