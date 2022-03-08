import { Injectable } from '@angular/core';
import { Libro } from './libros';
import { librosLista } from './listalibros';
@Injectable({
  providedIn: 'root'
})
export class ListaLibros1Service {
  // crear array con la lista libros
listaLibro: Libro[] = librosLista;
  constructor() { }
}
