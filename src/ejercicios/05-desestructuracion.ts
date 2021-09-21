
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles } = reproductor; // Desestructuración de objetos
const { autor } = detalles;

console.log( 'El volumen actual es de: ', volumen);
console.log( 'El segundo actual es de: ', segundo);
console.log( 'La cancion actual es: ', cancion);
console.log( 'El autor es: ', autor);

//////////////////////////////////////////////////////////

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ goku, vegeta, trunks ] = dbz; // Desestructuracion de arreglos es por posición

console.log( 'Personaje 1: ', goku );
console.log( 'Personaje 2: ', vegeta );
console.log( 'Personaje 3: ', trunks );

//////////////////////////////////////////////////////////////

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

export function calcularISV( productos: Producto[] ): [number, number] {
    let total = 0;

    productos.forEach( ({ precio }) => { // Desestructuracion de argumentos en funciones
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [ telefono, tableta ];
const [total, isv] = calcularISV( articulos );

console.log('Total: ', total);
console.log( 'ISV: ', isv );