import { Routes } from '@angular/router';
import { ListaSpiderman } from './components/lista-spiderman/lista-spiderman';
import { DetalleSpiderman } from './components/detalle-spiderman/detalle-spiderman';

export const routes: Routes = [
    { path: '', component: ListaSpiderman },
    { path: 'spiderman/:nombre', component: DetalleSpiderman },
];
