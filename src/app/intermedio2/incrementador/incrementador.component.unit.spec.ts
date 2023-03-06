import { IncrementadorComponent } from './incrementador.component';

//Pruebas unitarias
describe('Incrementador component',()=>{

  let component: IncrementadorComponent;

  beforeEach(()=> component = new IncrementadorComponent());

  it('No debe de pasar de 100 el progreso', ()=>{

    component.progreso = 50;
    component.cambiarValor( 5 );
    expect( component.progreso).toBe(55);

  })
})
