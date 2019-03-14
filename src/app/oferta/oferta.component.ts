import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfertasService } from "../ofertas.service";
import { Oferta } from "../shared/oferta.model";

@Component({
  selector: "ras-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.css"],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  private oferta: Oferta;
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit() {
    //console.log("id da rota: ", this.route.snapshot.params["id"]);
    // Duas maneiras de recuperar os parametros da url (snapshot e subscribe)
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro.id);
    // });
    this.ofertasService
      .getOfertaPorId(this.route.snapshot.params["id"])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });
  }
}
