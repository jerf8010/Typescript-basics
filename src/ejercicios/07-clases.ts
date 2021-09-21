
/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    
    constructor(
        public nombre: string,
        public direccion: string
    ){}

}

class Heroe extends PersonaNormal {
    // private alterEgo: string;
    // public edad: number; // public es por defecto
    // static nombreReal: string; // Se puede acceder sin crear una instancia de la clase Heroe.nombreReal

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){
        super( nombreReal, 'New York, USA' ); // LLama al constructor de PersonaNormal
    }



}

const ironman = new Heroe( 'Ironman', 45, 'Tony' );
console.log( ironman );