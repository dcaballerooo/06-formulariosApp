import { FormControl } from "@angular/forms";

export const  nombreApellidoPattern: string = '([aA-zZ]+) ([aA-zZ]+)';
export const  emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";




export const noPuedeSerDcaballero = (control: FormControl) =>{
    const valor:string = control.value?.trim();
    if(valor === 'Dcaballero'){
        return {
          noDcaballero: true
        }
    }
    return null;
  }