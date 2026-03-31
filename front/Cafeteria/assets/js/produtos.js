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
    await carregarCategorias(); // Preenche o select de categorias
    getProdutos();              // Lista produtos
});

botaoEnviar.addEventListener('click', postProduto);

// =========================
// FUNÇÃO: Carregar Categorias
// =========================
async function carregarCategorias() {
    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/categorias");
        var resposta = await requisicao.json();

        if (resposta.status === "success") {
            selectCategoria.innerHTML = '<option value="">Selecione a categoria</option>';
            resposta.data.forEach(cat => {
                var option = document.createElement("option");
                option.value = cat.id;
                option.textContent = cat.nome;
                selectCategoria.appendChild(option);
            });
        } else {
        
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

        // Se não for array, mostrar erro
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
    if (!inputNome.value || !inputPreco.value || !selectCategoria.value) {
   
        return;
    }

    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/produtos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nome: inputNome.value,
                preco: inputPreco.value,
                categoria_id: selectCategoria.value
            })
        });

        var resposta = await requisicao.json();

        console.log("POST:", resposta);

   

        // Limpar campos
        inputNome.value = "";
        inputPreco.value = "";
        selectCategoria.value = "";

        // Atualizar lista de produtos
        getProdutos();

    } catch (erro) {
        console.error("Erro ao cadastrar produto:", erro);
      
    }
}

// =========================
// FUNÇÃO: Deletar Produto (DELETE)
// =========================
async function deleteProduto(id) {
    if (!confirm("Deseja realmente deletar este produto?")) return;

    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/produtos?id=" + id, {
            method: "DELETE"
        });

        var resposta = await requisicao.json();

        console.log("DELETE:", resposta);

       

        getProdutos();

    } catch (erro) {
        console.error("Erro ao deletar produto:", erro);
       
    }
}