import { usuarioIngresado } from './booleanos';




describe( 'Prueba de booleanos', ()=>{
  it('Debe regresar true', ()=>{
    const res = usuarioIngresado();

    expect(res).toBeTruthy()
  })
})
