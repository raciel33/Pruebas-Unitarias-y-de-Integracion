import { Jugador2 } from './jugador2';



describe('Jugador 2 Emit',()=>{

  let jugador2: Jugador2;

  beforeEach(()=> jugador2 = new Jugador2());

  it('debe de emitir un evento cuando recibe danio',()=>{

    let nuevoHp = 0;

    jugador2.hpCambio.subscribe(hp=>{
         nuevoHp = hp;
    });

    jugador2.recibeDanio(1000);

    expect( nuevoHp).toBe(0);
  });


  it('debe de emitir un evento cuando recibe danio y sobrevivir si es menos de 100',()=>{

    let nuevoHp = 0;

    jugador2.hpCambio.subscribe(hp=>{
         nuevoHp = hp;
    });

    jugador2.recibeDanio(50);

    expect( nuevoHp).toBe(50);
  })

})
