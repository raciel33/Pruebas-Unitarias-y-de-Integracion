import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

//PRUEBAS DE INTEGRACION

describe('Incrementador Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

          component.leyenda = 'Progreso de carga';

          fixture.detectChanges();//disparar la detencion de cambios

          //con esto accedemos al elmento h3
          const elem: HTMLElement = fixture.debugElement.query( By.css('h3')).nativeElement;

          expect(elem.innerHTML).toContain('Progreso de carga')
    });

    it('Debe de mostrar en el input el valor del progreso',( done ) =>{

            component.cambiarValor(5);

            fixture.detectChanges();


            fixture.whenStable().then(()=>{

              const  input = fixture.debugElement.query(By.css('input'));
              const elem = input.nativeElement;


              expect( elem.value ).toBe('55');
              done();//para que detecte el whenStable
      })


    });

    it('Debe de incrementar/decrementar en 5, con un click en el boton',()=>{

          const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

          botones[0].triggerEventHandler('click', null);

          expect( component.progreso).toBe(45);

          botones[1].triggerEventHandler('click', null);

          expect( component.progreso).toBe(50);
    });

    it('En el título del componente debe de mostrar el progreso ',() => {

      const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

      botones[0].triggerEventHandler('click', null);

      fixture.autoDetectChanges();

      const elem: HTMLElement = fixture.debugElement.query( By.css('h3')).nativeElement;

      expect(elem.innerHTML).toContain('45')


    })

});
