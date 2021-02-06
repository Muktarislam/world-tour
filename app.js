fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
const displayCountries = countries => {
        const countriesDiv = document.getElementById('countries');
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            const countryDiv = document.createElement('div');
            countryDiv.className = 'country';
            const countryInfo = `
        <h3 class = "country-name">${country.name}</h3>
        <p class="capital">${country.capital}</p>
        <img id='image' src ="${country.flag}">`
            countriesDiv.appendChild(countryDiv);
            countryDiv.innerHTML = countryInfo;
        }
    }
    // const h3 = document.createElement('h3');
    // h3.innerText = country.name;
    // countryDiv.appendChild(h3);
    // const p = document.createElement('p');
    // p.innerText = country.capital;
    // countryDiv.appendChild(p);


// const h3 = document.createElement('h3');
// h3.innerText = country.name;
// countryDiv.appendChild(h3);
// const p = document.createElement('p');
// p.innerText = country.capital;
// countryDiv.appendChild(p);