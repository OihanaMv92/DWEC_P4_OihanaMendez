import { Component, OnInit } from '@angular/core';
import { librosLista } from '../listalibros';
import { Libro } from '../libros';
import { MessageService } from '../message.service';
import { ListaLibros1Service } from '../lista-libros1.service'; 

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {




  constructor(private messageService: MessageService, private listaLibroService: ListaLibros1Service) { }
  listaLibro:Libro[]=this.listaLibroService.listaLibro;
  ngOnInit(): void {  }

  borrar(libro: Libro){


    let indexLibro = this.listaLibro.indexOf(libro);

    this.listaLibro.splice(indexLibro,1); 

  
    this.messageService.add("Borrado correctamente");
  }

}
