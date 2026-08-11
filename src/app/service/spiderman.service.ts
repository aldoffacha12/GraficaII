import { Injectable } from '@angular/core';
import { ActorSpiderman } from '../model/spiderman';

@Injectable({
  providedIn: 'root',
})
export class SpidermanService {
  private catalogo: ActorSpiderman[] = [
    {
      nombre: 'Tobey Maguire',
      formato: 'Películas',
      universo: 'Trilogía de Sam Raimi - El Hombre Araña',
      aniosActivo: '2002 - 2007',
      peliculas: ['Spider-Man (2002)', 'Spider-Man 2 (2004)', 'Spider-Man 3 (2007)'],
      plataformas: ['Cine', 'Disney+'],
      imagen: '/imagenes/tobey.jpg',
    },
    {
      nombre: 'Andrew Garfield',
      formato: 'Películas',
      universo: 'The Amazing Spider-Man',
      aniosActivo: '2012 - 2014',
      peliculas: ['The Amazing Spider-Man (2012)', 'The Amazing Spider-Man 2 (2014)'],
      plataformas: ['Cine', 'Disney+'],
      imagen: '/imagenes/andrew.jpg',
    },
    {
      nombre: 'Tom Holland',
      formato: 'Películas y serie animada',
      universo: 'Universo Cinematográfico Marvel (MCU)',
      aniosActivo: '2016 - actualidad',
      peliculas: [
        'Captain America: Civil War (2016)',
        'Spider-Man: Homecoming (2017)',
        'Spider-Man: Far From Home (2019)',
        'Spider-Man: No Way Home (2021)',
        'spider-Man: Brand New Day (2026)',
      ],
      plataformas: ['Cine', 'Disney+'],
      imagen: '/imagenes/tom.jpg',
    },
    {
      nombre: 'Nicolas Cage',
      formato: 'Serie',
      universo: 'Spider-Noir (universo alternativo)',
      aniosActivo: '2026 - actualidad',
      peliculas: ['Spider-Noir (2024)'],
      plataformas: ['Prime Video'],
      imagen: '/imagenes/nicolas.jpg',
    },
  ];

  getCatalogo(): ActorSpiderman[] {
    return this.catalogo;
  }

  getPorNombre(nombre: string): ActorSpiderman | undefined {
    return this.catalogo.find(
      (actor) => actor.nombre.toLowerCase() === nombre.toLowerCase()
    );
  }

  buscar(termino: string): ActorSpiderman[] {
    const t = termino.toLowerCase();
    return this.catalogo.filter(
      (actor) =>
        actor.nombre.toLowerCase().includes(t) ||
        actor.universo.toLowerCase().includes(t)
    );
  }
}
