import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Injector } from '@angular/core';


//para el test del router-outlet
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent
      ],
      schemas:[ NO_ERRORS_SCHEMA ]//CON ESTO IGNORAMOS CUALQUIER DIRECTIVA QUE NO SE RECONOZCA

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebas');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('pruebas app is running!');
  });



///Pruebas hechas por mi-----------------------
  it('Debe de tener un router-outlet',()=>{

    const fixture = TestBed.createComponent(AppComponent);

    //cojemos la directiva del router_outlet
    const debugElement = fixture.debugElement.query( By.directive(RouterOutlet));

    //probamos que no este null
    expect( debugElement).not.toBeNull()

  });




});
