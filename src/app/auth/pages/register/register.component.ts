import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, EmailValidator } from '@angular/forms';

import { emailPattern, nombreApellidoPattern, noPuedeSerDcaballero } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {



  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern )]],
    email: ['', [Validators.required,  Validators.pattern( this.validatorService.emailPattern )], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerDcaballero ]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
      validators: [ this.validatorService.camposIguales('password', 'password2')]
  })


  get emailErrorMsg(){
    
    const errors = this.myForm.get('email')?.errors;
    if( errors?.required ){
      return 'El email es obligatorio';
    }else if(errors?.pattern){
      return 'El formato debe ser de email';
    }else if( errors?.emailTomado){
      return 'El email ya está en uso';
    }
    return '';
  }


  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService) {}

  ngOnInit(): void {
    this.myForm.reset({
      nombre: 'Daniel Caballero',
      email: 'test1@test.com',
      username: 'Dcaballerooo',
      password: '123456',
      password2: '123456'
    })
  }



  campoNoValido( campo: string ){
    return this.myForm.get(campo)?.invalid
           && this.myForm.get(campo)?.touched;
          }



          
  // emailRequired() {
  //   return this.myForm.get('email')?.errors?.required
  //          && this.myForm.get('email')?.touched;

  // }
  // emailFormato() {
  //   return this.myForm.get('email')?.errors?.pattern
  //          && this.myForm.get('email')?.touched;

  // }
  // emailTomado() {
  //   return this.myForm.get('email')?.errors?.emailTomado
  //          && this.myForm.get('email')?.touched;

  // }

  submitForm(){
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
  }

}
