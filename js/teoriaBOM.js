//setTimeout ejecuta una funcion pasado cierto tiempo
let contador = 1;

function saludar(nombre){
    document.write(`<p>Hola mundo, ${nombre}</p>`);
    if(contador === 6){
        clearInterval(identificador)
    }
    contador++;
}

// window.setTimeout(saludar, 3000);

// setTimeout(saludar,4000);

// setTimeout(()=>{
//     document.write('<p>Hola mundo</p>')
// }, 3000);

// setTimeout(()=>{ saludar('nico') }, 3000);

//seInterval ejecuta una funcion cada cierto tiempo

let identificador = setInterval(()=>{ saludar('tomas')}, 2000);