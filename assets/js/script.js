  //Funcion asincrona
  async function getDatos() {
    //Llamar la API - Decirle que espere mientras llegan datos, despues tu sigues
   const res  = await fetch(`https://restcountries.com/v3.1/subregion/South%20america`); 
    
   //Extrae la info de la api, la transforma en un objeto y espera para mostrarla.
   const data = await res.json();

   dibujaCards(data);
    
   console.log(data);
  }

  //Funcion para recibir,dibujar los paises y transformar en html visible
  function dibujaCards(paises) {
    const galeria = document.querySelector('.gallery');
    let htmlPaises = '';// Declaramos la variable donde se guardará el HTML concatenado
    paises.forEach((pais) => {
      htmlPaises += `
      <div class="card">
        <h2>${pais.name.official}</h2>
        <p><strong>Capital:</strong> ${pais.capital ? pais.capital[0] :'No Disponible'}</p>
        <p><strong>Idioma:</strong> ${Object.values(pais.languages || {'': 'No Disponible' }).join(', ')}</p>
        <button onclick="viewMore('${pais.cca3}')">Ver más</button>
      </div>
      `;
    });

    galeria.innerHTML = htmlPaises;
  }
  getDatos();