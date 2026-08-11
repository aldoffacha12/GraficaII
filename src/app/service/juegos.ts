import { Injectable } from '@angular/core';
import { Juego } from '../model/juego';

@Injectable({
  providedIn: 'root',
})
export class Juegos {
  private listaJuegos: Juego[] = [
    {
      id: 1,
      nombre: 'The Legend of Zelda: Breath of the Wild',
      genero: 'Aventura',
      plataforma: 'Nintendo Switch',
      anio: 2017,
      rating: 9.5,
      imagen:
        'https://upload.wikimedia.org/wikipedia/en/0/0b/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    },
    {
      id: 2,
      nombre: 'God of War',
      genero: 'Acción',
      plataforma: 'PlayStation 4',
      anio: 2018,
      rating: 9.0,
      imagen:
        'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg',          
    }, 
    {
      id: 3,
      nombre: 'Red Dead Redemption 2',
      genero: 'Acción/Aventura',
      plataforma: 'PlayStation 4, Xbox One, PC',
      anio: 2018,
      rating: 9.8,
      imagen:
        'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',
    }
  ]
  obtenerJuegos(): Juego[] {
    return this.listaJuegos;
  }
  obtenerJuegoPorId(id: number): Juego | undefined {
    return this.listaJuegos.find((juego) => juego.id === id);
  }
}
