import { Oferta } from "./shared/oferta.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class OfertasOldService {
  constructor(private http: HttpClient) {}

  public ofertas: Array<Oferta> = [
    {
      id: 1,
      categoria: "restaurante",
      titulo: "Super Burger",
      descricao: "Rodízio de Mini-hambúrger com opção de entrada.",
      anunciante: "Original Burger",
      valor: 29.9,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/1/img1.jpg" },
        { url: "/assets/ofertas/1/img2.jpg" },
        { url: "/assets/ofertas/1/img3.jpg" },
        { url: "/assets/ofertas/1/img4.jpg" }
      ]
    },
    {
      id: 2,
      categoria: "restaurante",
      titulo: "Cozinha Mexicana",
      descricao: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
      anunciante: "Mexicana",
      valor: 32.9,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/2/img1.jpg" },
        { url: "/assets/ofertas/2/img2.jpg" },
        { url: "/assets/ofertas/2/img3.jpg" },
        { url: "/assets/ofertas/2/img4.jpg" }
      ]
    },
    {
      id: 4,
      categoria: "diversao",
      titulo: "Estância das águas",
      descricao: "Diversão garantida com piscinas, trilhas e muito mais.",
      anunciante: "Estância das águas",
      valor: 31.9,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/3/img1.jpg" },
        { url: "/assets/ofertas/3/img2.jpg" },
        { url: "/assets/ofertas/3/img3.jpg" },
        { url: "/assets/ofertas/3/img4.jpg" },
        { url: "/assets/ofertas/3/img5.jpg" },
        { url: "/assets/ofertas/3/img6.jpg" }
      ]
    }
  ];

  public getOfertas(): Array<Oferta> {
    return this.ofertas;
  }

  public getOfertas2(): Promise<Oferta[]> {
    return new Promise((resolve, reject) => {
      let deu_certo = true;
      if (deu_certo) {
        setTimeout(() => resolve(this.ofertas), 3000);
      } else {
        reject({ codigo_erro: 404, mensagem_erro: "Servidor não encontrado" });
      }
    })
      .then((ofertas: Oferta[]) => {
        // fazer alguma tratativa aqui
        return ofertas;
      })
      .then((ofertas: Oferta[]) => {
        console.log("segundo then");
        return ofertas;
      });
  }
}
