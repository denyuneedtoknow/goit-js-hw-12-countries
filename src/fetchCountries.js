function fetchCountry(requestAddress) {
  return fetch(requestAddress)
    .then(response => {
      response.json();
    })
    .then(countries => {
      console.log(countries);
    })
    .catch(error => console.log('error'));
}
export default fetchCountry;

//     .then(countries => {
//   console.log(countries);
// })
// .catch(err => {
//   console.log('error');
// });
