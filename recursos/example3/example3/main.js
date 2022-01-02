
var app = new Vue({
  el: '#app',
  data: { 
    objects: [],
  }
})

fetch('https://apipetshop.herokuapp.com/api/articulos').then(response =>  {
  return  response.json();
}).then(data  =>  {
  console.log(data.response);
  app.objects = data.response;
})

function selectItem(){
  console.log('element');
}