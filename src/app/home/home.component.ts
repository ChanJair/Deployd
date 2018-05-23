import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  textoMamalon: string = "Agrega lo que quieras";
  btnText: string = 'Add an Item';
  btnText2: string = 'Metele mas!';
  a: string = "a";
  goalText: string = 'My first life goal'; 

  constructor() { }

  ngOnInit() {
  }

}
