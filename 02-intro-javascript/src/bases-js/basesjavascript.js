// ejemplo array y map
const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5]

let arreglo3 = arreglo2.map((num) => {
    return num * 2;
});

console.log(arreglo3);

//funciones
const saludar = (nombre) => {
    return `Hola soy una funcion ${nombre}`;
}

export const saludar2 = () => `Hola soy una funcion corta`;

console.log(saludar('yeahhh'));
console.log(saludar2());

const getUsuarioActivo = (name) => ({
    uid: '1234',
    username: name
});

const usuarioActivo = getUsuarioActivo('LISANDRO');
console.log(usuarioActivo);

//Desestructuracion objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const persona2 = {...persona };

const { clave, nombre, edad } = persona;

console.log('esto es persona2:', persona2);
console.log(nombre);
console.log(edad);
console.log(clave);

const contxt = ({ nombre, edad }) => {
    console.log('nombre en retornapersona:', nombre);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.2345,
            lng: -12.4667
        }
    }
};

// const { nombreClave, anios, latlng: { lat, lng } } = contxt(persona);

const { nombreClave, anios, latlng } = contxt(persona);

const { lat, lng } = latlng;
console.log(nombreClave, anios);
console.log(lat, lng);


//Desestructuracion arreglos
const personajes = ['Gokú', 'Vegeta', 'Tronx']
const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const uState = (valor) => {
    return [valor, () => { console.log('Hello World') }]
}

const [nombreA, sNombreA] = uState('Gokú');

console.log(nombreA);
sNombreA();