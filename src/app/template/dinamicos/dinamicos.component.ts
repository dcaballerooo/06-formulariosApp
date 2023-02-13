import { Component } from '@angular/core';



interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

 interface Favorito {
  id: number;
  nombre: string;
 }

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})



export class DinamicosComponent {


  nuevoJuego: string = "";


  persona: Persona = {
    nombre: 'Daniel Caballero',
    favoritos: [
      {id: 1, nombre: 'God of War'},
      {id: 2, nombre: 'CS:GO'}
    ]
  }

  save(){
    console.log("Formulario posteado")
  }


  delete( index: number){
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = { 
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push( {...nuevoFavorito} );
    this.nuevoJuego = '';
  }

}
