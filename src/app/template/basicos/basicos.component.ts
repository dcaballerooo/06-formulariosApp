import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {


  @ViewChild('myForm') myForm!: NgForm;


  initForm = {
    producto: "RTX 4080 ti",
    precio: 1000,
    existencias: 10
  }



  constructor(){ }


  nombreValido(): boolean{
    return this.myForm?.controls.producto?.invalid 
           && this.myForm?.controls.producto?.touched
  }
  precioValido(): boolean{
    return this.myForm?.controls.precio?.invalid 
           && this.myForm?.controls.precio?.value < 0
  }


  // save ( myForm: NgForm ) {
  save () {
    console.log( this.myForm )

    this.myForm.resetForm({
      precio: 0,
      existencias: 0
    });
  }

}
