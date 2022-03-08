import { Component, OnInit } from '@angular/core';
import {Libro} from '../libros'
import { ListaLibros1Service } from '../lista-libros1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})

export class NuevoComponent implements OnInit {

  nuevoLibro: Libro = {id: "",titulo: "",autor: "", descripcion: ""};

  constructor(private listaLibroServicio:ListaLibros1Service, private router: Router) { }
  // creas una array y metes el array de servicios
listaLibro:Libro[]=this.listaLibroServicio.listaLibro;
  ngOnInit(): void {
  }
  insertar() {

    let nuevoId="";
    for(let i=0; i < this.listaLibro.length; i++){
        nuevoId=""+(parseInt(this.listaLibro[i].id)+1);
    }


    let valorTitulo = document.getElementById('valorTitulo');
    let valorAutor = document.getElementById('valorAutor');
    let valorDescripcion = document.getElementById('valorDescripcion');
    if(valorTitulo==null||valorAutor==null){
      console.log("ERROR!!");
      
    } else{
      let descripcion = "";
      if(valorDescripcion!=null){
        descripcion = valorDescripcion.innerText;
      }
      
    
    this.nuevoLibro.id = nuevoId;
    this.nuevoLibro.titulo = valorTitulo.innerText;
    this.nuevoLibro.autor = valorAutor.innerText;
    this.nuevoLibro.descripcion = descripcion;


      this.listaLibroServicio.listaLibro.push(this.nuevoLibro);
    } 
    // redireciona.
    this.router.navigate(['']);
  }


}
