import { Jugador } from './clases';

//nota:
//beforeAll():
//beforeEach():
//afterAll():
//afterEach:





describe('Pruebas de clases',()=>{

  let jugador = new Jugador();


  //se ejecuta antes que todas las pruebas
  beforeAll(() =>{
    //  console.log('beforeAll');
 });

 // se ejecuta antes de cada prueba
 beforeEach(() =>{
      // console.log('beforeEach');
      jugador = new Jugador();//antes de cada prueba tomara el valor de 100 definido en el constructor
 });


 //se ejecuta despues que todas las pruebas
 afterAll(() =>{
  // console.log('afterAll');
 });


 //se ejecuta despues de cada prueba
 afterEach(() =>{
  // console.log('afterEach');
 })



  it( 'debe de retornar 80 de hp, si recibe 20 de danio',()=>{

    const resp = jugador.recibeDanio(20);

    expect( resp ).toBe(80);

  });
  it( 'debe de retornar 50 de hp, si recibe 50 de danio',()=>{

    const resp = jugador.recibeDanio(50);

    expect( resp ).toBe(50);

  });
  it( 'debe de retornar 0 de hp, si recibe 100 o mas de danio',()=>{

    const resp = jugador.recibeDanio(200);

    expect( resp ).toBe(0);

  });
})
