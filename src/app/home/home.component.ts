import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked =false;
  show = false;
  title = 'app';

  boat= [
    {
      name: 'khurshed',
      price: 999
    },
    
  ]

  games=[
    {
      name:'hitman',
      price:199,
      img:'assets/images/SVG/bg.svg'
    },

    {
      "name":"RaOne",
      "price":"299",
      "img":"https://www.finesco-kw.com/logo.jpg"
    },

    {
      "name":"Ferrari",
      "price":"99",
      "img":"assets/images/SVG/bgcloud.svg"
    },
  ];


  new() {
    alert()
  }

  //  data() {
  //    this.clicked=true;
  // }
  
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
}


