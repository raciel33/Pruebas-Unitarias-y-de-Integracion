import { obtenerRobots } from './arreglos';

//si se pone una x delante se omite la prueba

xdescribe(' Prubas de arreglos', ()=>{

  it('Debe de retornar al menos 3 robots', ()=>{

    const res = obtenerRobots();

    expect( res.length).toBeGreaterThanOrEqual(3)//prueba que la respuesta sea >=3
  });

  it('Debe de retornar al menos a Megan y jaris', ()=>{

    const res = obtenerRobots();

    expect( res ).toContain('Megan');//prueba que la respuesta contenga a Megan
    expect( res ).toContain('jaris');//prueba que la respuesta contenga a jaris


  });
});
