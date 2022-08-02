import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  // esse input está indo lá para o painel.
  @Input('progresso') public progresso: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
