
var store = new Vue({
  el: '#store',
  data: { 
    objects: [],
  }
})

fetch('https://apipetshop.herokuapp.com/api/articulos').then(response =>  {
  return  response.json();
}).then(data  =>  {
  console.log(data.response);
  store.objects = data.response;
})

function selectItem(){
  console.log('element');
}