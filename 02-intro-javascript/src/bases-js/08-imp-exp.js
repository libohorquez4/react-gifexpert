// forma 1 de importat
// import { heroes } from './data/heroes';

// forma 2 de importar
import heroes from '../data/heroes';


const getHeroeById = (id) => {
    return heroes.find((hero) => hero.id === id)
}

const getHeroesByOwner = (owner) => {
    return heroes.filter((hero) => hero.owner === owner)
}

console.log('esto es hero:', getHeroeById(2));
console.log('esto es ownerdc:', getHeroesByOwner('DC'));