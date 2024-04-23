const produtosBebidas = [
    {
      id: 1,
      nome: "Teachers",
      tipo: "Destilado",
      marca: "Glenfiddich",
      volume: "750ml",
      preco: 250.00,
      estoque: 50
    },
    {
      id: 2,
      nome: "Periquita",
      tipo: "Vinho",
      marca: "Château Margaux",
      volume: "750ml",
      preco: 150.00,
      estoque: 100
    },
    {
      id: 3,
      nome: "Skol",
      tipo: "Cerveja",
      marca: "Goose Island",
      volume: "330ml",
      preco: 10.00,
      estoque: 200
    },
    {
      id: 4,
      nome: "Slova",
      tipo: "Destilado",
      marca: "Absolut",
      volume: "1L",
      preco: 80.00,
      estoque: 80
    },
    {
      id: 5,
      nome: "Cidra",
      tipo: "Espumante",
      marca: "Moët & Chandon",
      volume: "750ml",
      preco: 300.00,
      estoque: 30
    },
    {
      id: 6,
      nome: "Gin",
      tipo: "Destilado",
      marca: "Bombay Sapphire",
      volume: "700ml",
      preco: 120.00,
      estoque: 60
    },
    {
      id: 7,
      nome: "Montila",
      tipo: "Destilado",
      marca: "Havana Club",
      volume: "700ml",
      preco: 50.00,
      estoque: 100
    },
    {
      id: 8,
      nome: "Tesquila",
      tipo: "Destilado",
      marca: "Patrón",
      volume: "750ml",
      preco: 90.00,
      estoque: 70
    },
    {
      id: 9,
      nome: "Licor de cacau xavier",
      tipo: "Destilado",
      marca: "Baileys",
      volume: "750ml",
      preco: 40.00,
      estoque: 150
    },
    {
      id: 10,
      nome: "Sakê",
      tipo: "Sakê",
      marca: "Gekkeikan",
      volume: "720ml",
      preco: 25.00,
      estoque: 120
    },
    {
      id: 11,
      nome: "Sidra",
      tipo: "Sidra",
      marca: "Strongbow",
      volume: "500ml",
      preco: 15.00,
      estoque: 80
    },
    {
      id: 12,
      nome: "Licor de Café",
      tipo: "Licor",
      marca: "Kahlúa",
      volume: "750ml",
      preco: 35.00,
      estoque: 90
    },
    {
      id: 13,
      nome: "Vinho Branco",
      tipo: "Vinho",
      marca: "Sauvignon Blanc",
      volume: "750ml",
      preco: 20.00,
      estoque: 200
    },
    {
      id: 14,
      nome: "Cachaça Ypioca",
      tipo: "Destilado",
      marca: "Leblon",
      volume: "1L",
      preco: 30.00,
      estoque: 300
    },
    {
      id: 15,
      nome: "Espumante Rosé",
      tipo: "Espumante",
      marca: "Ruinart",
      volume: "750ml",
      preco: 40.00,
      estoque: 70
    },
    {
      id: 16,
      nome: "Cerveja Lager",
      tipo: "Cerveja",
      marca: "Heineken",
      volume: "330ml",
      preco: 8.00,
      estoque: 250
    },
    {
      id: 17,
      nome: "Vinho Rosé",
      tipo: "Vinho",
      marca: "Domaine Ott",
      volume: "750ml",
      preco: 25.00,
      estoque: 120
    },
    {
      id: 18,
      nome: "Soda",
      tipo: "Misturador",
      marca: "Schweppes",
      volume: "1L",
      preco: 5.00,
      estoque: 500
    },
    {
      id: 19,
      nome: "Água Mineral",
      tipo: "Água",
      marca: "Evian",
      volume: "500ml",
      preco: 2.00,
      estoque: 800
    },
    {
      id: 20,
      nome: "Energético",
      tipo: "Energético",
      marca: "Red Bull",
      volume: "250ml",
      preco: 6.00,
      estoque: 400
    },

  ];
  

let tbody = document.querySelector("tbody")


function renderTable() {

    for (let index = 0; index < produtosBebidas.length; index++) {
        let row = document.createElement("tr")
        row.innerHTML += `  <td>${produtosBebidas[index].id}</td>
                            <td>${produtosBebidas[index].nome}</td>
                            <td>${produtosBebidas[index].tipo}</td>
                            <td>${produtosBebidas[index].marca}</td>
                            <td>${produtosBebidas[index].volume}</td>
                            <td>${produtosBebidas[index].preco}</td>
                            <td>${produtosBebidas[index].estoque}</td>
                            <td><button onclick="renderEditModal()" class="btn btn-warning">Editar</button></td>
                            <td><button onclick="deleteData(${produtosBebidas[index].id})" class="btn btn-danger">Excluir</button></td>
                            `
        tbody.appendChild(row)
    }
   
}
renderTable()

function renderModalCreate() {
  let body = document.querySelector("body")
  let div = document.createElement("div")
  div.classList.add("modal-overlay");
  div.innerHTML = `<div id="createModal" class="modal-content">
  </form>
  <form>
      <button type="button" onclick="removeModalCreate()" class="btn btn-primary">x</button>
      <div class="form-group">
          <input type="text" class="form-control" id="exampleInputId" aria-describedby="emailHelp" placeholder="Id">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="exampleInputNome" aria-describedby="emailHelp" placeholder="Digite seu nome">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="exampleInputTipo" aria-describedby="emailHelp" placeholder="Digite seu tipo">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="exampleInputMarca" aria-describedby="emailHelp" placeholder="Digite sua marca">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="exampleInputVolume" aria-describedby="emailHelp" placeholder="Digite o volume">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="exampleInputPreco" aria-describedby="emailHelp" placeholder="Digite o preço">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="exampleInputEstoque" aria-describedby="emailHelp" placeholder="Digite a unidade">
      </div>
      <button type="button" onclick=" criardados()" class="btn btn-primary">Enviar</button>
      <button type="button" onclick="removeModalCreate()"class="btn btn-primary">Remover</button>
  </form>
  </div>`
  body.appendChild(div)
}

function removeModalCreate(){
    let modal = document.querySelector(".modal-overlay")
    let body = document.querySelector("body")

    body.removeChild(modal)
}

// Adcionar ítem
function criardados(){
    let id = document.querySelector("#exampleInputId").value
    let nome = document.querySelector("#exampleInputNome").value
    let tipo = document.querySelector("#exampleInputTipo").value
    let marca = document.querySelector("#exampleInputMarca").value
    let volume = document.querySelector("#exampleInputVolume").value
    let preco = document.querySelector("#exampleInputPreco").value
    let estoque = document.querySelector("#exampleInputEstoque").value
    let tbody = document.querySelector("tbody")

    tbody.innerHTML = " "

    produtosBebidas.push({
        id:id,
        nome:nome,
        tipo:tipo,
        marca:marca,
        volume:volume,
        preco:preco,
        estoque:estoque
    })

    renderTable()
    removeModalCreate()
}

// Editar ítem
function renderEditModal(){
    let body = document.querySelector("body")
  let div = document.createElement("div")
  div.classList.add("modal-overlay");
  div.innerHTML = `<div id="createModal" class="modal-content">
  </form>
  <form>
      <div class="form-group">
          <input type="text" class="form-control" id="editId" aria-describedby="emailHelp" placeholder="Id">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="editNome" aria-describedby="emailHelp" placeholder="Digite seu nome">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="editTipo" aria-describedby="emailHelp" placeholder="Digite seu tipo">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="editMarca" aria-describedby="emailHelp" placeholder="Digite sua marca">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="editVolume" aria-describedby="emailHelp" placeholder="Digite o volume">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="editPreco" aria-describedby="emailHelp" placeholder="Digite o preço">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="editEstoque" aria-describedby="emailHelp" placeholder="Digite a unidade">
      </div>
      <button type="button" onclick="editdata()" class="btn btn-primary">Enviar</button>
      <button type="button" onclick="removeEditModal()"class="btn btn-primary">Remover</button>
  </form>
  </div>`
  body.appendChild(div)
}

// Remover modal de edição
function removeEditModal(){
    let modal = document.querySelector(".modal-overlay")
    let body = document.querySelector("body")

    body.removeChild(modal)
}

// cadastrar dados
function editdata(){
    let id = document.querySelector("#editId").value
    let nome = document.querySelector("#editNome").value
    let tipo = document.querySelector("#editTipo").value
    let marca = document.querySelector("#editMarca").value
    let volume = document.querySelector("#editVolume").value
    let preco = document.querySelector("#editPreco").value
    let estoque = document.querySelector("#editEstoque").value
    let body = document.querySelector("tbody")

    // capturar o index pelo findIndex
    const index = produtosBebidas.findIndex(item => item.id == id)

    produtosBebidas[index] = {
        id:id,
        nome:nome,
        tipo:tipo,
        marca:marca,
        volume:volume,
        preco:preco,
        estoque:estoque
    }

    tbody.innerHTML=" "
    renderTable()
    removeEditModal()
}

function deleteData(id){
    let body = document.querySelector("tbody")
    const index = produtosBebidas.findIndex(item => item.id == id)
    
    produtosBebidas.splice(index,1)

    body.innerHTML = ""
    renderTable()

    // splice
    // Limpar a lista
    // Renderizar
}




// Ajustar estilo 
// Criar botão "X" que dispare a função de "remover" ----done -----
// 1. puxar os dados dos campos do input;
// 2. não deixar o usuário editar o ID
// muitas coisas estão se repetindo. Encontre uma forma  que obtenha o mesmo resultado, porém com o código mais limpo
// Criar alerta "confirmar delete"
// criar esse projeto para outro tema
