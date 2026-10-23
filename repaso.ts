/*
Contexto: La base de datos guarda nombres en minúsculas y se requiere pasarlos a mayúsculas con un 
prefijo "CLIENTE VIP:".
Array simulado:
interface Cliente { id: number; nombre: string; correo: string; }
const dbClientes: Cliente[] = [
  { id: 1, nombre: "ana maria", correo: "ana@test.com" },
  { id: 2, nombre: "pedro perez", correo: "pedro@test.com" },
  { id: 3, nombre: "laura gomez", correo: "laura@test.com" }
];

Misión:
1. Crear `obtenerClientesFormateados(): Promise<{ id: number; etiqueta: string; correo: string }[]>`.
2. Usar `.map()` para transformar los datos tras 1 segundo de retraso.
3. Consumir usando async/await.
*/

interface Cliente { id: number; nombre: string; correo: string; }
const dbClientes: Cliente[] = [
  { id: 1, nombre: "ana maria", correo: "ana@test.com" },
  { id: 2, nombre: "pedro perez", correo: "pedro@test.com" },
  { id: 3, nombre: "laura gomez", correo: "laura@test.com" }
];

function obtenerClientesFormateados(): Promise<{ id: number; etiqueta: string; correo: string }[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const conexionExitosa = false;
      if (conexionExitosa) {
        resolve.map (dbClientes);
      } else {
        reject(new Error("Error 500:fallo la conexion a la base de datos"));
      }
    }, 2000);
  });
}
async function ejecutarConsulta(): Promise<void> {
  try {
    //si la promesa se cumple
    console.log("Cargando datos.....");
    const listaFunval = await traerData();
    console.log(listaFunval);
  } catch (error) {
    //si la promesa falla
    console.log(error);
  }
}

ejecutarConsulta();