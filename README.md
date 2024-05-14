# Sistema de Bebidas - DC

Este projeto é um sistema de gerenciamento de bebidas utilizando HTML, CSS, JavaScript e Bootstrap do curso de Desenvolvimento Fullstack da Digital College. Ele permite adicionar, editar e excluir informações de um inventário de produtos de bebidas.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

1. `index.html`: Contém a estrutura HTML da página.
2. `styles.css`: Contém o estilo personalizado da página.
3. `scripts.js`: Contém a lógica JavaScript para o funcionamento da aplicação.

## Funcionalidades

### Adicionar Bebidas

- O botão "Adicionar" abre um modal onde é possível inserir os detalhes de uma nova bebida (ID, Nome, Tipo, Marca, Volume, Preço e Estoque).
- Após preencher os campos e clicar em "Enviar", a bebida é adicionada à tabela.

### Editar Bebidas

- Cada linha na tabela possui um botão "Editar" que abre um modal para editar os detalhes da bebida selecionada.
- Os campos podem ser atualizados e, após clicar em "Enviar", as mudanças são refletidas na tabela.

### Excluir Bebidas

- Cada linha na tabela possui um botão "Excluir" que remove a bebida correspondente do inventário.

## Como Usar

### Estrutura HTML

O arquivo `index.html` define a estrutura básica da página, incluindo a tabela para exibir as bebidas e um botão para adicionar novas bebidas.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Sistema de Bebidas - DC</title>
</head>
<body>
    <button onclick="renderModalCreate()" class="btn btn-success">Adicionar</button>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Tipo</th>
                <th scope="col">Marca</th>
                <th scope="col">Volume</th>
                <th scope="col">Preço</th>
                <th scope="col">Estoque</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <script src="scripts.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Lógica JavaScript

O arquivo `scripts.js` contém a lógica para renderizar a tabela, abrir e fechar modais, adicionar, editar e excluir bebidas.

#### Renderizar Tabela

```javascript
function renderTable() {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for (let bebida of produtosBebidas) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${bebida.id}</td>
            <td>${bebida.nome}</td>
            <td>${bebida.tipo}</td>
            <td>${bebida.marca}</td>
            <td>${bebida.volume}</td>
            <td>${bebida.preco}</td>
            <td>${bebida.estoque}</td>
            <td>
                <button onclick="renderEditModal(${bebida.id})" class="btn btn-warning">Editar</button>
                <button onclick="deleteData(${bebida.id})" class="btn btn-danger">Excluir</button>
            </td>`;
        tbody.appendChild(row);
    }
}
renderTable();
```

#### Adicionar Bebida

```javascript
function renderModalCreate() {
    let body = document.querySelector("body");
    let div = document.createElement("div");
    div.classList.add("modal-overlay");
    div.innerHTML = `
        <div id="createModal" class="modal-content">
            <form>
                <button type="button" onclick="removeModalCreate()" class="btn btn-primary">x</button>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputId" placeholder="Id">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputNome" placeholder="Digite seu nome">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputTipo" placeholder="Digite seu tipo">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputMarca" placeholder="Digite sua marca">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputVolume" placeholder="Digite o volume">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputPreco" placeholder="Digite o preço">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEstoque" placeholder="Digite a unidade">
                </div>
                <button type="button" onclick="criardados()" class="btn btn-primary">Enviar</button>
                <button type="button" onclick="removeModalCreate()" class="btn btn-primary">Remover</button>
            </form>
        </div>`;
    body.appendChild(div);
}

function criardados() {
    let id = document.querySelector("#exampleInputId").value;
    let nome = document.querySelector("#exampleInputNome").value;
    let tipo = document.querySelector("#exampleInputTipo").value;
    let marca = document.querySelector("#exampleInputMarca").value;
    let volume = document.querySelector("#exampleInputVolume").value;
    let preco = document.querySelector("#exampleInputPreco").value;
    let estoque = document.querySelector("#exampleInputEstoque").value;

    produtosBebidas.push({
        id: id,
        nome: nome,
        tipo: tipo,
        marca: marca,
        volume: volume,
        preco: preco,
        estoque: estoque
    });

    renderTable();
    removeModalCreate();
}
```

#### Editar Bebida

```javascript
function renderEditModal(id) {
    let bebida = produtosBebidas.find(item => item.id == id);
    if (bebida) {
        let body = document.querySelector("body");
        let div = document.createElement("div");
        div.classList.add("modal-overlay");
        div.innerHTML = `
            <div id="editModal" class="modal-content">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="editId" value="${bebida.id}" disabled>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="editNome" value="${bebida.nome}">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="editTipo" value="${bebida.tipo}">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="editMarca" value="${bebida.marca}">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="editVolume" value="${bebida.volume}">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="editPreco" value="${bebida.preco}">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="editEstoque" value="${bebida.estoque}">
                    </div>
                    <button type="button" onclick="editdata(${bebida.id})" class="btn btn-primary">Enviar</button>
                    <button type="button" onclick="removeEditModal()" class="btn btn-primary">Remover</button>
                </form>
            </div>`;
        body.appendChild(div);
    }
}

function editdata(id) {
    let nome = document.querySelector("#editNome").value;
    let tipo = document.querySelector("#editTipo").value;
    let marca = document.querySelector("#editMarca").value;
    let volume = document.querySelector("#editVolume").value;
    let preco = document.querySelector("#editPreco").value;
    let estoque = document.querySelector("#editEstoque").value;

    let bebida = produtosBebidas.find(item => item.id == id);
    if (bebida) {
        bebida.nome = nome;
        bebida.tipo = tipo;
        bebida.marca = marca;
        bebida.volume = volume;
        bebida.preco = preco;
        bebida.estoque = estoque;
    }

    renderTable();
    removeEditModal();
}
```

#### Excluir Bebida

```javascript
function deleteData(id) {
    let index = produtosBebidas.findIndex(item => item.id == id);
    if (index !== -1) {
        produtosBebidas.splice(index, 1);
    }
    renderTable();
}
```

### Estilos CSS

O arquivo `styles.css` contém o estilo para os modais e outros elementos da página.

```css
.modal-overlay {
    position: fixed;
    top:

 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 999; 
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
```

## Instalação

1. Clone o repositório.
2. Abra o arquivo `index.html` no navegador.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

