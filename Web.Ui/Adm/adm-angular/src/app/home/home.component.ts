﻿import { Component, OnInit, Input  } from '@angular/core';
import { HomeService } from "app/service/home.service";
import { Home } from "app/model/home.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modelo : Home;
  homeSrv : HomeService;

  listaValores : any;
  @Input() testeInput : string;
  constructor(homeService : HomeService) {
    //this.especialidades = homeService.getEspecialidade();
    this.modelo = new Home();
    this.homeSrv = homeService;
    this.ListaValores();
   }

   public cadastrar(){
       this.homeSrv.CadastrarInfo(this.modelo);
       this.ListaValores();
   }

   public DeletarHome(id) {
       this.homeSrv.DeletarHome(id);
       this.ListaValores();
   }

   public ListaValores() {
       this.listaValores = this.homeSrv.GetInfo();
   }

  ngOnInit() {
  }

}
