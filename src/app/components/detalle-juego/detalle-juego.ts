import { Component } from '@angular/core';
import { Juego } from '../../model/juego';
import { Juegos } from '../../service/juegos';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-juego',
  imports: [RouterLink],
  templateUrl: './detalle-juego.html',
  styleUrl: './detalle-juego.css',
})
export class DetalleJuego {
  juego: Juego | undefined;
  constructor(
    private route: ActivatedRoute,
    private juegosService: Juegos) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.juego = this.juegosService.obtenerJuegoPorId(id);
  }
}
