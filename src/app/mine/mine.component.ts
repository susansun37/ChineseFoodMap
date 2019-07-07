import { Component, OnInit } from '@angular/core';
import {mySetting} from '../mySetting';
import { myFavorite } from '../myFavorite';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  mySetting: mySetting = {
    name: 'Setting'
  };
  myFavorite: myFavorite = {
    name: 'Favorite'
  };


  constructor() { }

  ngOnInit() {
  }

  onSelect(): void {
    
  }

}
