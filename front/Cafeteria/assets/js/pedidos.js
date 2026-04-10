let divResposta;
let inputCliente;
let inputTotal;

document.addEventListener('DOMContentLoaded', () => {

    divResposta   = document.getElementById("resposta");
    inputCliente  = document.getElementById("cliente");
    inputTotal    = document.getElementById("total");

    getPedidos();

    document.getElementById('botaoEnviar')
        .addEventListener('click', postPedidos);
});

// ---------------- GET ----------------
async function getPedidos() {
    try {
        const req = await fetch("http://localhost/cafeteria-api/pedidos");
        const res = await req.json();

        const linhas = res.data.map(item => {

            const data = new Date(item.criado_em);
            const horario = data.toLocaleString('pt-BR');

            return `
            <tr>
                <td>${item.id}</td>
                <td>${item.cliente}</td>
                <td>R$ ${item.total}</td>
                <td>${horario}</td>
                <td>
                    <button onclick="deletePedido(${item.id})">Deletar</button>
                       <button onclick="window.location.href='pedido_itens.html?id=${item.id}';">visualizar</button>.
                    

                </td>
            </tr>
            `;
        }).join("");    

        divResposta.innerHTML = `
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Horário</th>
                    <th>Ações</th>
                </tr>
                ${linhas}
            </table>
        `;
    } catch (erro) {
        console.error("Erro ao buscar pedidos:", erro);
    }
}

// ---------------- POST ----------------
async function postPedidos() {
    try {
        const erroDiv = document.getElementById('erro-pedido');

        const cliente = inputCliente.value.trim();
        

        console.log("Enviando:", cliente,);

        if (!cliente) {
            erroDiv.textContent = 'Nome obrigatório!';
            return;
        }

       

        const response = await fetch("http://localhost/cafeteria-api/pedidos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cliente: cliente,
               
            })
        });

        const data = await response.json();
        console.log("Resposta da API:", data);

        inputCliente.value = "";
       
        erroDiv.textContent = "";

        getPedidos();

    } catch (erro) {
        console.error("Erro completo:", erro);
    }
}
// ---------------- DELETE ----------------
async function deletePedido(id) {
    try {
        await fetch("http://localhost/cafeteria-api/pedidos/" + id, {
            method: "DELETE"
        });

        getPedidos();
    } catch (erro) {
        console.error("Erro ao deletar pedido:", erro);
    }
}