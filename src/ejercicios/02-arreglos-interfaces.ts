
/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 
                   'Counter', 
                   'Healing',
                ];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // puebloNatal es opcional
}

const personaje: Personaje = {
    nombre: 'Strinder',
    hp: 100,
    habilidades: ['Bash', 
                  'Counter', 
                  'Healing',
                ]
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );


