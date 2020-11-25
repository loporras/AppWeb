import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cerrarNavBar(){
    $('.navbar-collapse').collapse('hide');
  }
  alerta() {
    $('#alerta').modal();
    this.cerrarNavBar();
  }
}
