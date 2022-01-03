let store = new Vue({
  el: '#store',
  data: {
    objects: [],
    buscador: '',
    carrito: [],
    total : 0 
  }
})

let app = new Vue({
  el: '#app',
  data: {

  },
  methods: {
    enviarMensaje: function () {
      let comentarios = document.querySelector('#comentarios');
      let name = document.querySelector('#name');
      let last_name = document.querySelector('#last_name');

      if (comentarios.value) {
        alert('Su mensaje ha sido enviado con exito!');
        comentarios.value = "";
        name.value = "";
        last_name.value = "";
      } else {
        alert('Ingresa un comentario campeón!')
      }
    }
  }
})

fetch('https://apipetshop.herokuapp.com/api/articulos')
  .then(response => {
    return response.json();
  })
  .then(data => {
    store.objects = data.response;
    console.log(store.objects);
  })
  .catch(error => console.error('Error:', error))
  .finally(() => {
    document.querySelector('#cargando').style.display = 'none';
    document.querySelector('#divider').style.display = 'none';
    document.querySelector('.farmacia-banner').style.display = 'block';
    document.querySelector('.jugueteria-banner').style.display = 'block';
  })
