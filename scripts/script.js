
var store = new Vue({
  el: '#store',
  data: {
    objects: [],
  }
})

fetch('https://apipetshop.herokuapp.com/api/articulos').then(response => {
  return response.json();
}).then(data => {
  console.log(data.response);
  store.objects = data.response;
})
  .catch(error => console.error('Error:', error))
  .finally(() => {
    document.querySelector('#cargando').style.display = 'none';
    document.querySelector('.farmacia-banner').style.display = 'block';
    document.querySelector('.jugueteria-banner').style.display = 'block';
  })


function selectItem() {
  console.log('element');
}