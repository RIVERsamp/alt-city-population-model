console.log("City population project loaded succesfully.");

const cityList = document.querySelector("#city-list");

function formatPopulation(population) {
  return population.toLocaleString("en-US");
}

function displayCities(cityData) {
  cityList.innerHTML = "";

  cityData.forEach(function (city) {
    const cityCard = document.createElement("article");
    cityCard.classList.add("city-card");

    cityCard.innerHTML = 
      <h2>${city.alt_rank}. ${city.city}</h2>
      <p>${city.state} - ${city.region}</p>    
      <p><strong>Alternative population:</strong>
       ${formatPopulation(city.alt_population)}
  </p>
  <p><strong>Current population:</strong>
    ${formatPopulation(city.current_population)}
  </p>
  ';

  cityList.appendChild(cityCard);
});
}

displayCities(cities);
  
  

