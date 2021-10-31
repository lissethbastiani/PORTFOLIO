function renderizarItems(valor){

  items = document.getElementsByClassName("item")

  div_array = [...items];

  div_array.forEach( item => {

    if(item.getAttribute("data-categoria") != valor){
      item.style.display = "none"
    } else {
      item.style.display = "block"
    }
  }); 

}

document.querySelector('#buscador')?.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.currentTarget.myText.value);

  valor = e.currentTarget.myText.value

  items = document.getElementsByClassName("item")

  div_array = [...items];

  div_array.forEach( item => {

    if(item.getAttribute("data-categoria") != valor){
      item.style.display = "none"
    } else {
      item.style.display = "block"
    }
  }); 
});