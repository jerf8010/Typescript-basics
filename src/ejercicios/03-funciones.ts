
/*
    ===== Código de TypeScript =====
*/


function sumar(a: number, b: number): number{
    return a + b;
}

const sumarFlecha = ( a: number, b: number ): number => {
    return a + b;
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base;
} // Primero van los argumentos obligatorios, despues los opcionales y al último los que tienen valor por defecto

const resultado = multiplicar( 5, 10 ); // retorna 10 = 5 * 2

console.log(resultado);


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR, curarX: number ): void {
    personaje.pv += curarX;

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de vida: ', this.pv);
    }
}

curar( nuevoPersonaje, 20 );
nuevoPersonaje.mostrarHp();