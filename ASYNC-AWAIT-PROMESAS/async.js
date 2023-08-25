const datos = [{nombre: 'andres', edad : 23}]
//Normal
const getDatos = () =>{
    return datos;
}
console.log("getDatos -->", getDatos());

//Simulando un API con setTimeOut sin esperar...
const getDatosTimeOutWithoutPromise = () => {
    setTimeout(() => {
        return datos;
    }, 1500);
}
console.log("getDatosTimeOutWithoutPromise-->" , getDatosTimeOutWithoutPromise());


//Simulando un API con setTimeOut esperando con promesa...
const getDatosTimeOutPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}
getDatosTimeOutPromise().then((datos) => console.log("getDatosTimeOutPromise ->", datos));


// Utilizando async y await
const imprimiendo = async() =>{
    console.log("getDatosTimeOutWithAsync-->" , await getDatosTimeOutPromise());
}

imprimiendo();
