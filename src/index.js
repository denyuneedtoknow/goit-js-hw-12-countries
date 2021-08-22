import './sass/main.scss';
import { alert, info, error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import fetchCountry from './fetchCountries';
import debounce from 'lodash.debounce';
import refs from './refs';

function address(e) {
  e.preventDefault();
  const input = String(document.querySelector('#countryName').value);
  const requestAddress = `${refs.addressOfData}${input}`;
  console.log(requestAddress);
  fetchCountry(requestAddress)
    .then(countries => {
      console.log(countries);
      if (countries.length > 10) {
        alert('too many');
        return;
      }
    })
    .catch(err => {
      console.log('error');
    });
}
// address();
// console.log(address());
// fetchCountry().then(countries => {
//   console.log(countries.length);
//   if (countries.length > 10) {
//     alert('too many');
//   } else {
//     alert(countries.length);
//   }
// });

btnRequest.addEventListener('click', address);
