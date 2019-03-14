import { Oferta } from "./shared/oferta.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL_API } from "./oferta/oferta.api";

//import "rxjs/add/operator/toPromise";

@Injectable()
export class OfertasService {
  private url_api = `${URL_API}ofertas`;

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    return this.http
      .get(`${this.url_api}?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get(`${this.url_api}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`${this.url_api}?id=${id}`)
      .toPromise()
      .then((oferta: Oferta) => {
        return oferta.shift();
        //return oferta[0]    mesma coisa que o de cima
      });
  }
}
