import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { NgAisModule } from 'angular-instantsearch';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

Shadab='Shadab'

  constructor() { }

  ngOnInit() {
  }  

  algolia={
    apiKey: '925009c79db3e2e429b483913c476686',
    appId: 'FO94IGJGKN',
    indexName: 'test',
    routing: true
  }

opendata=[
  {
    name:'khurshed',
    size:'40 mb',
  },
  {
    name:'Imran',
    size:'400 mb'
  }
  
]

  new() {
    alert("")
  }


  shadab()  {
    alert("ff")
  }
}
