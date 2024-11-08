//Funcion para mostrar el estado de carga
const loadingIndicator = document.getElementById('loading')

function showLoading() {
  loadingIndicator.classList.remove('hidden');
}  
  
//Funcion para ocultar el estado de carga
function hideLoading() {
  loadingIndicator.classList.add('hidden');

}

  //Funcion asincrona
  async function getDatos(subregion) {
    showLoading();
    try {
       //Llamar la API - Decirle que espere mientras llegan datos, despues tu sigues
        const res  = await fetch(`https://restcountries.com/v3.1/subregion/${subregion}`);
 
        //Extrae la info de la api, la transforma en un objeto y espera para mostrarla.
        const data = await res.json();
        dibujaCards(data);
  
    } catch (error) {
        alert("No pude conectarme a la API");
    }finally {
      hideLoading();
    }
   
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

function viewMore(countryCode) {
    window.location.href = `detail.html?code=${countryCode}`;
}

  // Evento para cada enlace en la barra de navegación
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener("click", (event) => {
      const region = event.target.textContent;
      
      let subregion = '';

      switch (region) {
        case "América del Norte":
          subregion = 'North America';
          break;

        case "América del Sur":
          subregion = 'South America';
          break;

        case "América Central":
          subregion = 'Central America';
          break;
      }

      getDatos(subregion);
    });
  });

  getDatos('South America');

  