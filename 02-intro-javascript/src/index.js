const activo = true;

let mensaje = activo ? 'Activo' : 'Inactivo';

// si solo quiero que haga algo si es true y no evalue nada más
mensaje = activo && 'Activo';

console.log(mensaje);