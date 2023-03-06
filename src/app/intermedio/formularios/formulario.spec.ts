import { FormularioRegister } from './formulario';
import {   FormBuilder} from "@angular/forms";


describe('Fomularios',()=>{

  let componente: FormularioRegister;

  beforeEach(()=>{

    componente = new FormularioRegister( new FormBuilder());
  });

  it('Debe de tener un formulario los campos email y password',()=>{

    expect( componente.form.contains('email')).toBeTruthy();//espera que contenga el campo email
    expect( componente.form.contains('password')).toBeTruthy()//espera que contenga el campo email

  });

  it('El email debe de ser obligatorio',()=>{

    const control = componente.form.get('email');
    control?.setValue('');

    expect(control?.valid).toBeFalsy();//espera que no este vacio(required)

  });

  it('El email debe de ser un email valido',()=>{

    const control = componente.form.get('email');
    control?.setValue('fsfndnkdk@gmail.com');

    expect(control?.valid).toBeTruthy();//espera que no este vacio(required)

  });
})
