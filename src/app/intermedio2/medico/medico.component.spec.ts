import { MedicoComponent } from './medico.component';
import { Component } from '@angular/core';
import { TestBed,ComponentFixture  } from "@angular/core/testing";
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

//PRUEBAS DE INTEGRACION

describe('MedicoComponent' , ()=>{

     let component: MedicoComponent;
     let fixture: ComponentFixture<MedicoComponent>;

     //configuracion para pruebas de integracion
     /**Tanto el componente los servicios y los modulos a probar hay que declararlos
      * aqui para poder probarlos
      */
      beforeEach(()=>{

        TestBed.configureTestingModule({
          declarations:[
            MedicoComponent//componente
          ],
          providers: [ MedicoService],
          imports: [HttpClientModule]

        })
      fixture = TestBed.createComponent( MedicoComponent );
      component = fixture.componentInstance;


      })
     it(' Debe de crearse el componente',()=>{

      expect( component ).toBeTruthy()

     });
     it(' Debe de retornarn el nombre del medico ',()=>{

      const nombre = 'Juan';
     const resp = component.saludarMedico(nombre)

      expect( resp ).toContain(nombre)

     })
})
