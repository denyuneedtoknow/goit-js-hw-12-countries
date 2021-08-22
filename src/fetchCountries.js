function fetchCountry(requestAddress) {
  return fetch(requestAddress)
    .then(response => {
      return response.json();
    })
    .catch(error => console.log('error'));
}
export default fetchCountry;
