import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Juego } from '../../model/juego';
import { Juegos } from '../../service/juegos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-juegos',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-juegos.html',
  styleUrl: './lista-juegos.css',
})
export class ListaJuegos {
  juegos: Juego[];
  constructor(private juegosService: Juegos) { 
    this.juegos = this.juegosService.obtenerJuegos();
  }
}
