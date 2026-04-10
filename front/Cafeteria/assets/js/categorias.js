
var divResposta = document.getElementById("resposta")

var inputNome   = document.getElementById("nome")

document.addEventListener('DOMContentLoaded', () => {
    getCategorias();

    // Clear error on input
    inputNome.addEventListener('input', () => {
        document.getElementById('erro-categoria').textContent = '';
    });
});
document.getElementById('botaoEnviar').addEventListener('click', postCategoria)

async function getCategorias() {
    var requisicao = await fetch("http://localhost/cafeteria-api/categorias")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td><button onclick="deleteCategoria(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="3" ><center>Categorias Cadastradas</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}



async function postCategoria() {
    const erroDiv = document.getElementById('erro-categoria');
    erroDiv.textContent = '';

    const nome = inputNome.value.trim();

    if (!nome) {
        erroDiv.textContent = 'Nome da categoria é obrigatório!';
        inputNome.focus();
        return;
    }

    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/categorias", {
            method:  "POST",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify({ nome: nome })
        })

        var resposta = await requisicao.json()
        console.log(resposta)
        
        // Mostrar sucesso
        erroDiv.style.color = 'green';
        erroDiv.textContent = 'Categoria cadastrada com sucesso!';

        //Limpa o campo
        inputNome.value = ""

        getCategorias()

        // Limpar mensagem após 3s
        setTimeout(() => {
            erroDiv.textContent = '';
        }, 3000);

    } catch (erro) {
        console.error('Erro ao cadastrar categoria:', erro);
        erroDiv.style.color = 'red';
        erroDiv.textContent = 'Erro ao cadastrar. Tente novamente.';
    }
}


async function deleteCategoria(id) {
    var requisicao = await fetch("http://localhost/cafeteria-api/categorias/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    console.log(resposta)
 
    getCategorias()
}