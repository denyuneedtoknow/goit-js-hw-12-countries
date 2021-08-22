import './sass/main.scss';
import { alert, info, error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import fetchCountry from './fetchCountries';
import debounce from 'lodash.debounce';
import refs from './refs';
import countryList from './templates/countryList.hbs';
import countryExpanded from './templates/countryExpanded.hbs';

function address() {
  const input = String(document.querySelector('#countryName').value);
  const requestAddress = `${refs.addressOfData}${input}`;
  refs.root.innerHTML = '';
  fetchCountry(requestAddress)
    .then(countries => {
      if (countries.length > 10) {
        error('To many countries founded. Please enter a more specific request.');
        return;
      } else if (countries.length === 1) {
        function markup(countries) {
          return countries.map(countryExpanded).join('');
        }
        refs.root.insertAdjacentHTML('beforeEnd', `${markup(countries)}`);
      } else if (countries.length > 1 && countries.length < 10) {
        function markupList(countries) {
          return countries.map(countryList).join('');
        }
        refs.root.insertAdjacentHTML('beforeEnd', `${markupList(countries)}`);
      }

      refs.inputField.value = '';
    })
    .catch(err => {
      alert('error');
    });
}

refs.inputField.addEventListener('input', debounce(address, 1500));
