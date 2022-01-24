import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mainMenu:{
    defaultOptions:Array<any>, accessLink:Array<any>
  }={defaultOptions:[], accessLink:[]};

  customOptions:Array<any>=[];

  logout:Array<any>=[];

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions=[
      { name:"Home", icon:"uil-estate", router:["/home"] },
      { name:"Buscar", icon:"uil-search", router:["/home", "history"] },
      { name:"Tu Biblioteca", icon:"uil-chart", router:["/home", "favorites"] }
    ]

    this.mainMenu.accessLink=[
      { name:"Crear lista", icon:"uil-plus-square" },
      { name:"Canciones que te gustan", icon:"uil-heart-medical", router:["/home", "favorites"] }
    ]

    this.customOptions=[
      { name:"Mi lista N°1", router:["/home"] },
      { name:"Mi lista N°2", router:["/home"] },
      { name:"Mi lista N°3", router:["/home"] },
      { name:"Mi lista N°4", router:["/home"] },
    ]

    this.logout=[
      {router:["/", "auth"]}
    ]
  }
}
