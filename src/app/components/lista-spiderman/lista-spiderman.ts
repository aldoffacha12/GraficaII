import { Component } from '@angular/core';
import { ActorSpiderman } from '../../model/spiderman';
import { SpidermanService } from '../../service/spiderman.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-spiderman',
  imports: [RouterLink],
  templateUrl: './lista-spiderman.html',
  styleUrl: './lista-spiderman.css',
})
export class ListaSpiderman {
  actores: ActorSpiderman[];
  constructor(private spidermanService: SpidermanService) {
    this.actores = this.spidermanService.getCatalogo();
  }
}
