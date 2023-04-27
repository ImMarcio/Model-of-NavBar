// Variáveis
const listaFavoritos = document.getElementById('lista-favoritos');
const btnAdicionar = document.getElementById('btn-adicionar');

// Eventos
btnAdicionar.addEventListener('click', adicionarFavorito);

// Funções
function adicionarFavorito() {
  const url = prompt('Digite a URL do site:');
  const nome = prompt('Digite o nome do site:');
  const imagem = prompt('Digite a URL da imagem do site:');
  
  if (url && nome && imagem) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const a = document.createElement('a');
    const span = document.createElement('span');
    
    img.src = imagem;
    a.href = url;
    a.textContent = nome;
    span.textContent = 'x';
    span.classList.add('remover-favorito');
    
    li.appendChild(img);
    li.appendChild(a);
    li.appendChild(span);
    listaFavoritos.appendChild(li);
    
    span.addEventListener('click', removerFavorito);
  }
}

function removerFavorito() {
  const li = this.parentElement;
  listaFavoritos.removeChild(li);
}


var searchBtn = document.getElementById("search-btn");
var searchForm = document.getElementById("search-form");

searchBtn.addEventListener("click", function() {
  searchForm.classList.toggle("d-none");
});
