import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/empty'
import { Subject } from 'rxjs-compat';


//clase que simula un Router falso con el objetivo de utilizar una sola propiedad del router

class FakeRouter{

  navigate( params: string){

  }
}

//clase que simula un ActivatedRoute falso con el objetivo de utilizar una sola propiedad del router
class FakeActivatedRoute {

        //params:Observable<any> = Observable.empty();

        private subject = new Subject();//para insertar valores a un observable


        push( valor:any ){
          this.subject.next( valor )
        }


        get params(){
          return this.subject.asObservable();//regresar un nuevo observable
        }
}



describe('RouterMedicoComponent', () => {


  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers:[
        {
          //indicando que use las propiedades del Router de la clase fakeRouter
          provide: Router, useClass:FakeRouter
        },
        {
          //indicando que use las propiedades del ActivatedRoute de la clase fakeActivatedRoute
          provide: ActivatedRoute, useClass:FakeActivatedRoute
        },

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//PRUBAS HECHAS POR MI----------------------------------
  it('Debe de redireccionar a Medico cuando se guarde',()=>{

    const router = TestBed.get(Router);

    const spy = spyOn( router, 'navigate');

    component.guardarMedico();

    //probamos que haya sido llamado con los parametros establacidos en el navigate de la funcion
    expect(spy).toHaveBeenCalledWith(['medico','123'])
  })


//------------------------------------------------------------------------
  it('Debe de colocar el id = nuevo ', ()=>{

    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push({ id:'nuevo '});

    expect(component.id).toContain('nuevo')
  })

});
