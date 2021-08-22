import debounce from 'lodash.debounce';

function test() {
  alert('test');
}
debounce(test, 2000);

const root = document.querySelector('#root');
const btnRequest = document.querySelector('#btnRequest');
// const flag = document.querySelector('#flag');
const addressOfData = 'https://restcountries.eu/rest/v2/name/';
// const header = document.querySelector('#nameReveal');

// function createImage(countries) {
//   header.innerHTML = countries[0].capital;
//   const flagSrc = countries[0].flag;
//   const img = document.createElement('img');
//   img.src = flagSrc;
//   const capital = document.createElement('h1');
//   root.appendChild(img);
//   root.appendChild(capital);
// }

function fetchCountry(e) {
  e.preventDefault();
  const input = String(document.querySelector('#countryName').value);
  const requestAddress = `${addressOfData}${input}`;
  console.log('test');
  fetch(requestAddress)
    .then(response => {
      return response.json();
    })
    .then(countries => {
      console.log(countries.length);
      if (countries.length > 10) {
        alert('too many');
      } else {
        const selectedCountries = countries.map(country => {
          const flagSrc = country.flag;
          const img = document.createElement('img');
          img.src = flagSrc;
          const capital = document.createElement('h1');
          capital.innerText = country.capital;
          root.appendChild(capital);
          root.appendChild(img);
        });
      }
    })
    .catch(err => console.log('err'));
}

btnRequest.addEventListener('click', fetchCountry);

// export default fetchCountry;
