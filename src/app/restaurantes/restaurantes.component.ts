import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'ras-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers:[ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  ofertas: Oferta[]

  constructor(private ofertasServices: OfertasService) { }

  ngOnInit() {
    this.ofertasServices.getOfertasPorCategoria('restaurante').then((ofertas: Oferta[]) =>{
      this.ofertas = ofertas
    })
  }

}
