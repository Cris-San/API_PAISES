  //Funcion asincrona
  async function getDatos() {
    //Llamar la API - Decirle que espere mientras llegan datos, despues tu sigues
   const res  = await fetch(`https://restcountries.com/v3.1/subregion/South%20america`); 
    
   //Extrae la info de la api, la transforma en un objeto y espera para mostrarla.
   const data = await res.json();

   console.log(data);
  }
  getDatos();