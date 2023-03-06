import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs';

import { from , throwError } from 'rxjs';
import { off } from 'process';
import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/throw'

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const spy = jasmine.createSpyObj('HttpClient', [ 'prueba'] );

    const servicio = new MedicosService(spy);

    beforeEach( () => {

      componente = new MedicosComponent(servicio)

    });


    it('Init : Debe de cargar los medicos', () => {

             const medicos = ['medico1','medico2', 'medicos3'];

             //espia que simula la llamada a esta funcion en el servicio
             spyOn( servicio, 'getMedicos' ).and.callFake( () => {

               return from( [ medicos ]);//recibe respuesta

             })

                componente.ngOnInit();

                expect( componente.medicos.length ).toBeGreaterThan(0)//sea mayor que cero
    });
//--------------------------------------------------------------------------
    it(' Debe de llamar al servidor para agregar los medicos', () => {

             //espia que simula la llamada a esta funcion en el servicio

            const espia=  spyOn( servicio, 'agregarMedico' ).and.callFake( medico => {

               return Observable.empty();

             })

                componente.agregarMedico();

                expect( espia).toHaveBeenCalled()//evaluamos que esta funcion ha sido llamada
    });
//-------------------------------------------------------------------
it(' Debe de agregar un medico al arreglo de  medicos', () => {

         const medico = { id:1, nombre:'Juan'};

         //espia que simula la llamada a esta funcion en el servicio

          spyOn( servicio, 'agregarMedico' ).and.returnValue(
               from([ medico ]));

         componente.agregarMedico();

         //evaluamos que el medico que le mande en el espia esta incluido en el arreglo de medicos
         expect( componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0)

  });
//-----------------------------------
it('Si falla la adicion, la propiedad mensajeError debe ser igual al mensaje de error del servicio',()=>{

         const miError = 'No pudo agregar el medico';

         //espia
         spyOn( servicio, 'agregarMedico').and.returnValue(
           throwError((miError)));

           componente.agregarMedico();

           expect( componente.mensajeError).toBe( miError )//comprobamos que los dos mensajes sean iguales

       });
//-------------------------------------------------------------------
it('Debe de llamar al servidor para borrar un medico',() => {

  //espia que simula el ok del prompt que sale
  spyOn( window, 'confirm').and.returnValue( true );

  const espia = spyOn( servicio, 'borrarMedico').and.returnValue(Observable.empty());

    componente.borrarMedico('1');

     expect( espia ).toHaveBeenCalledWith('1');//se ha llamado con 1

  })
});


