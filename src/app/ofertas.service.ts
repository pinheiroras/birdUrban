import { Oferta } from "./shared/oferta.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL_API } from "./oferta/oferta.api";

//import "rxjs/add/operator/toPromise";

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    return this.http
      .get(`${URL_API}ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get(`${URL_API}ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`${URL_API}ofertas?id=${id}`)
      .toPromise()
      .then((oferta: Oferta) => {
        return oferta[0];
        //return oferta.shift();
        //return oferta[0]    mesma coisa que o de cima
      });
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http
      .get(`${URL_API}como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta);
        return resposta[0].descricao;
        //return oferta.shift();
        //return oferta[0]    mesma coisa que o de cima
      });
  }
}
