
/*
    ===== Código de TypeScript =====
*/


interface Pasajero {
    nombre: string;
    hijos?: string[]; // esta propiedad es opcional
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}
const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['NAtalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero ): void {

    const cuantosHijos = pasajero.hijos?.length || 0; // Intenta evaluar los hijos si ha, hace lo siguiente

    console.log( cuantosHijos );
}

imprimeHijos( pasajero1 );