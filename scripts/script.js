  let store = new Vue({
    el: '#store',
    data: {
      objects: [],
      buscador: ''
    }, method: {
      
    },
    computed: {
      filteredObjects: function () {
        return this.objects.filter((element) => {
          if (element.nombre.match(this.buscador)) {
            return element;
          }
        })
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
