import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';



import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';





describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[ RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  ///Pruebas hechas por mi-----------------------
   //-------------------------------------------------
   it('Debe de tener un link a la pagina de medicos',()=>{


    //cojemos los elementos que tiene la  directiva routerLink que tienen el href
    const debugElement = fixture.debugElement.queryAll( By.directive(RouterLinkWithHref));

    let existe = false;

    //con un for buscamos la ruta hacia /medicos
    for (const elem of debugElement) {

      if (elem.attributes['routerLink'] === '/medicos') {
        existe = true;
        break;
      }
    }

    //probamos que existe sea verdadero
    expect( existe ).toBeTruthy();

  })

});
