import { Component } from '@angular/core';
import { ActorSpiderman } from '../../model/spiderman';
import { SpidermanService } from '../../service/spiderman.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-spiderman',
  imports: [RouterLink],
  templateUrl: './detalle-spiderman.html',
  styleUrl: './detalle-spiderman.css',
})
export class DetalleSpiderman {
  actor: ActorSpiderman | undefined;
  constructor(
    private route: ActivatedRoute,
    private spidermanService: SpidermanService) {
    const nombre = this.route.snapshot.paramMap.get('nombre') ?? '';
    this.actor = this.spidermanService.getPorNombre(nombre);
  }
}
