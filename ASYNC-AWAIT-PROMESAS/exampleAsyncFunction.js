const datos = [{nombre: 'andres', edad : 23}]

const getDatosTimeOutPromise = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(datos);
      }, 1500);
  });
}

async function exampleAsyncFunction() {
    console.log("Comenzando la función");
  
    const result = await getDatosTimeOutPromise(); // Supongamos que esto es una operación asincrónica
  
    console.log("Obtuvimos los datos:", result);
  
    console.log("Terminando la función");
  }
  
  console.log("Inicio del programa");
  exampleAsyncFunction();
  console.log("Fin del programa");