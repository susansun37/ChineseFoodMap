import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as echarts from 'echarts';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Chinese Food Map';

  regionOptions;

  constructor(private http: HttpClient, private router: Router, private activeRouter: ActivatedRoute) { }

  public onChartClick(event) {
      console.log(event.data.webData.path);
      this.router.navigate([event.data.webData.path], {
        queryParams: {mapName: event.data.webData.name, 
        path: event.data.webData.path}
         
      });
 /*     this.router.navigate(event.data.webData.path, {
        queryParams: {mapName: event.data.webData.path.name},
        
      });*/
    
 //   this.router.navigateByUrl("/jiangsu");
  }

  ngOnInit() {
    this.http.get('assets/china.json').subscribe(geoJson =>{
      //    echarts.geoJson =
      //  this.get('map/china.json', function (chinaJson) {
          echarts.registerMap('China', geoJson);  
          
          this.regionOptions = {

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

            series: [
              {
                type: 'map',
                map: 'china',
    
                mapType: 'China',//consistent with what in registerMap
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
              zoom: 1.4,
              data: [
                { name: '北京', value: 0, webData: {path: '/beijing',name: '北京'}},
                { name: '天津', value: 0, webData: {path: '/tianjing',name: '天津'} },
                { name: '重庆', value: 0, webData: {path: '/chongqing',name: '重庆'} },
                { name: '上海', value: 0, webData: {path: '/shanghai',name: '上海'} },
                { name: '湖南', value: 0, webData: {path: '/hunan',name: '湖南'} },
                { name: '广东', value: 0, webData: {path: '/guangdong',name: '广东'} },
                { name: '福建', value: 0, webData: {path: '/fujian',name: '福建'} },
                { name: '江西', value: 0, webData: {path: '/jiangxi',name: '江西'} },
                { name: '四川', value: 0, webData: {path: '/sichuan',name: '四川'} },
                { name: '广西', value: 0, webData: {path: '/guangxi',name: '广西'} },
                { name: '新疆', value: 0, webData: {path: '/xinjiang',name: '新疆'} },
                { name: '西藏', value: 0, webData: {path: '/xizang',name: '西藏'} },
                { name: '青海', value: 0, webData: {path: '/qinghai',name: '青海'} },
                { name: '甘肃', value: 0, webData: {path: '/gansu',name: '甘肃' } },
                { name: '宁夏', value: 0, webData: {path: '/ningxia',name: '宁夏'} },
                { name: '内蒙古', value: 0, webData: {path: '/neimenggu',name: '内蒙古'} },
                { name: '海南', value: 0, webData: {path: '/hainan',name: '海南'} },
                { name: '山西', value: 0, webData: {path: '/shanxi',name: '山西'} },
                { name: '陕西', value: 0, webData: {path: '/shanxi',name: '陕西'} },
                { name: '云南', value: 0, webData: {path: '/yunnan',name: '云南'} },
                { name: '贵州', value: 0, webData: {path: '/guizhou',name: '贵州'} },
                { name: '湖北', value: 0, webData: {path: '/hubei',name: '湖北'} },
                { name: '浙江', value: 0, webData: {path: '/zhejiang',name: '浙江'} },
                { name: '安徽', value: 0, webData: {path: '/anhui',name: '安徽'} },
                { name: '河南', value: 0, webData: {path: '/henan',name: '河南'} },
                { name: '山东', value: 0, webData: {path: '/shandong',name: '山东'} },
                { name: '江苏', value: 20 , webData: {path: '/jiangsu',name: '江苏'}},
                { name: '河北', value: 0, webData: {path: '/hebei',name: '河北'} },
                { name: '辽宁', value: 0, webData: {path: '/liaoning',name: '辽宁'} },
                { name: '吉林', value: 0, webData: {path: '/jilin',name: '吉林'} },
                { name: '黑龙江', value: 0, webData: {path: '/heilongjiang',name: '黑龙江'} },
                { name: '台湾', value: 0, webData: {path: '/taiwan',name: '台湾'} },
                { name: '南海诸岛', value: 0, webData: {path: '/nanhaizhudao',name: '南海诸岛'}}]
              }
            ]//end of series
          
          }

        });
        
  }

}
