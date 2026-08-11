import { Routes } from '@angular/router';
import { ListaJuegos } from './components/lista-juegos/lista-juegos';
import { DetalleJuego } from './components/detalle-juego/detalle-juego';

export const routes: Routes = [
    { path: '', component: ListaJuegos },
    { path: 'juegos/:id', component: DetalleJuego },
];
