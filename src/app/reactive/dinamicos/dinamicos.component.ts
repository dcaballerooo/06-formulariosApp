import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['CS:GO', Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr(){
    return this.myForm.get('favoritos') as FormArray;
  }


  constructor(private fb: FormBuilder) { }


  campoEsValido(campo: string){
    return this.myForm.controls[campo].errors
           && this.myForm.controls[campo].touched;  

  }


  guardar(){

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }


  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }
    this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  borrar(index: number){
    this.favoritosArr.removeAt(index);
  }

}


