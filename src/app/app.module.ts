import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopoComponent } from "./topo/topo.component";
import { HomeComponent } from "./home/home.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { OfertaComponent } from './oferta/oferta.component';

@NgModule({
  declarations: [AppComponent, TopoComponent, HomeComponent, RodapeComponent, DiversaoComponent, RestaurantesComponent, OfertaComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
