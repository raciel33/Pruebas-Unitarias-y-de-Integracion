import { mensaje } from './string';



//describe('Pruebas de strings');

//it('Debe de regresar un string')

describe( 'Pruebas de strings', () => {

  it( 'debe de regresar un string' , ()=>{
      const resp= mensaje('fernando');
      expect( typeof resp).toBe('string');
  });

  it( 'debe de regresar un saludo con el nombre enviado' , ()=>{

    const nombre = 'Juan'
    const resp= mensaje( nombre );

    expect(resp).toContain( nombre );
})
});
