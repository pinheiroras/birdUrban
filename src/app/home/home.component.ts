import { Component, OnInit } from "@angular/core";
import { OfertasService } from "../ofertas.service";
import { Oferta } from "../shared/oferta.model";

@Component({
  selector: "ras-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService
      .getOfertas2()
      .then(
        (ofertas: Oferta[]) => {
          this.ofertas = ofertas;
        }
        // outra maneira de usar  o reject sem o catch()
        // (param: any) => {
        //   console.log(param);
        // }
      )
      .catch((param: any) => {
        console.log(param);
      });
  }
}