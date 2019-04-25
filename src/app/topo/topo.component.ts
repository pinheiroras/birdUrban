import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ras-topo",
  templateUrl: "./topo.component.html",
  styleUrls: ["./topo.component.css"]
})
export class TopoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // public pesquisa(event: Event): void {
  //   console.log((<HTMLInputElement>event.target).value);
  // }

  public pesquisa(termoDaPesquisa: string): void {
    console.log(termoDaPesquisa);
  }
}
