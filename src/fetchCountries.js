import { alert, info, error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';

function fetchCountry(requestAddress) {
  return fetch(requestAddress)
    .then(response => {
      if (response.status === 404) {
        error('No country founded, please try another approach');
      }
      return response.json();
    })
    .catch(error => console.log('error'));
}
export default fetchCountry;
