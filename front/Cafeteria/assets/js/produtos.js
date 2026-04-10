// =========================
// Elementos do DOM
// =========================
var divResposta      = document.getElementById("resposta");
var inputNome        = document.getElementById("nome");
var inputPreco       = document.getElementById("preco");
var selectCategoria  = document.getElementById("categoria");
var botaoEnviar      = document.getElementById("botaoEnviar");

// =========================
// Eventos
// =========================
document.addEventListener('DOMContentLoaded', async () => {
    await carregarCategorias();
    getProdutos();

    // Limpar erros ao digitar
    inputNome.addEventListener('input', limparErro);
    inputPreco.addEventListener('input', limparErro);
    selectCategoria.addEventListener('change', limparErro);
});

botaoEnviar.addEventListener('click', postProduto);

function limparErro() {
    const erroDiv = document.getElementById('erro-produto');
    erroDiv.textContent = '';
    erroDiv.style.color = 'red';
}

// =========================
// FUNÇÃO: Carregar Categorias
// =========================
async function carregarCategorias() {
    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/categorias");
        var resposta = await requisicao.json();

        console.log("CATEGORIAS:", resposta);

        // Caso a API retorne { status, data }
        if (resposta.status === "success") {
            selectCategoria.innerHTML = '<option value="">Selecione a categoria</option>';

            resposta.data.forEach(cat => {
                var option = document.createElement("option");
                option.value = cat.id;
                option.textContent = cat.nome;
                selectCategoria.appendChild(option);
            });

        } 
        // Caso retorne array direto
        else if (Array.isArray(resposta)) {
            selectCategoria.innerHTML = '<option value="">Selecione a categoria</option>';

            resposta.forEach(cat => {
                var option = document.createElement("option");
                option.value = cat.id;
                option.textContent = cat.nome;
                selectCategoria.appendChild(option);
            });

        } else {
            console.error("Formato inesperado de categorias");
        }

    } catch (erro) {
        console.error("Erro ao buscar categorias:", erro);
    }
}

// =========================
// FUNÇÃO: Listar Produtos (GET)
// =========================
async function getProdutos() {
    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/produtos");
        var resposta = await requisicao.json();

        console.log("PRODUTOS:", resposta);

        if (!Array.isArray(resposta)) {
            divResposta.innerHTML = "Erro ao carregar produtos";
            return;
        }

        const linhas = resposta.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>R$ ${parseFloat(item.preco).toFixed(2)}</td>
                <td>${item.categoria || 'N/A'}</td>
                <td>
                    <button onclick="deleteProduto(${item.id})">Deletar</button>
                </td>
            </tr>
        `).join("");

        divResposta.innerHTML = `
            <table border="1">
                <thead>
                    <tr>
                        <th colspan="5">Produtos</th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    ${linhas}
                </tbody>
            </table>
        `;

    } catch (erro) {
        console.error("Erro ao buscar produtos:", erro);
        divResposta.innerHTML = "Erro ao carregar produtos";
    }
}

// =========================
// FUNÇÃO: Cadastrar Produto (POST)
// =========================
async function postProduto() {
    const erroDiv = document.getElementById('erro-produto');
    erroDiv.textContent = '';
    erroDiv.style.color = 'red';

    const nome = inputNome.value.trim();
    const preco = inputPreco.value.trim();
    const categoria = selectCategoria.value;

    if (!nome) {
        erroDiv.textContent = 'Nome do produto é obrigatório!';
        inputNome.focus();
        return;
    }

    if (!preco || isNaN(preco) || parseFloat(preco) <= 0) {
        erroDiv.textContent = 'Preço deve ser um número maior que 0!';
        inputPreco.focus();
        return;
    }

    if (!categoria) {
        erroDiv.textContent = 'Selecione uma categoria!';
        selectCategoria.focus();
        return;
    }

    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/produtos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nome: nome,
                preco: preco,
                categoria_id: categoria
            })
        });

        var resposta = await requisicao.json();
        console.log("POST:", resposta);

        // Mensagem de sucesso
        erroDiv.style.color = 'green';
        erroDiv.textContent = 'Produto cadastrado com sucesso!';

        // Limpar campos
        inputNome.value = "";
        inputPreco.value = "";
        selectCategoria.value = "";

        // Atualizar lista
        getProdutos();

        setTimeout(() => {
            erroDiv.textContent = '';
        }, 3000);

    } catch (erro) {
        console.error("Erro ao cadastrar produto:", erro);
        erroDiv.style.color = 'red';
        erroDiv.textContent = 'Erro ao cadastrar. Tente novamente.';
    }
}

// =========================
// FUNÇÃO: Deletar Produto (DELETE)
// =========================
async function deleteProduto(id) {
    if (!confirm("Deseja realmente deletar este produto?")) return;

    try {
        var requisicao = await fetch(`http://localhost/cafeteria-api/produtos?id=${id}`, {
            method: "DELETE"
        });

        var resposta = await requisicao.json();
        console.log("DELETE:", resposta);

        getProdutos();

    } catch (erro) {
        console.error("Erro ao deletar produto:", erro);
    }
}