const urlParams = new URLSearchParams(window.location.search);
const pedidoId = urlParams.get('id');

const selectProdutos = document.getElementById('selectProduto');
const inputQtd = document.getElementById('quantidade');
const tabelaCorpo = document.getElementById('corpoTabelaItens');
const spanTotal = document.getElementById('totalGeral');

document.addEventListener('DOMContentLoaded', () => {
    if (!pedidoId) {
        alert("ID do pedido não encontrado!");
        window.location.href = "pedido.html";
        return;
    }
    carregarProdutos();      
    carregarItensDoPedido(); 
});

async function carregarProdutos() {
    try {
        const req = await fetch("http://localhost/cafeteria-api/controllers/produtos.php");
        const res = await req.json();
        
        if (res.status === 'success') {
            selectProdutos.innerHTML = '<option value="">Selecione um produto...</option>';
            res.data.forEach(prod => {
                const option = document.createElement('option');
                option.value = prod.id;
                option.textContent = `${prod.nome} - R$ ${parseFloat(prod.preco).toFixed(2)}`;
                selectProdutos.appendChild(option);
            });
        }
    } catch (error) {
        console.error("Erro ao carregar lista de produtos:", error);
    }
}

async function adicionarItem() {
    const idProd = selectProdutos.value;
    const qtd = inputQtd.value;

    if (!idProd || qtd < 1) {
        alert("Selecione um produto e uma quantidade válida");
        return;
    }

    try {
        const response = await fetch("http://localhost/cafeteria-api/controllers/pedido_itens.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                pedido_id: pedidoId,
                produto_id: idProd,
                quantidade: qtd
            })
        });

        const res = await response.json();
        if(res.status === 'success') {
            inputQtd.value = "1";
            selectProdutos.value = "";
            carregarItensDoPedido(); 
        } else {
            alert("Erro ao adicionar: " + res.message);
        }
    } catch (error) {
        console.error("Erro na requisição POST:", error);
    }
}

async function carregarItensDoPedido() {
    try {
        const req = await fetch(`http://localhost/cafeteria-api/controllers/produtos.php?pedido_id=${pedidoId}`);
        const res = await req.json();

        if (res.status === 'success') {
            let totalGeral = 0;
            tabelaCorpo.innerHTML = "";

            res.data.forEach(item => {
                const subtotal = parseFloat(item.quantidade) * parseFloat(item.preco);
                totalGeral += subtotal;

                tabelaCorpo.innerHTML += `
                    <tr>
                        <td>${item.produto}</td>
                        <td>${item.quantidade}</td>
                        <td>R$ ${parseFloat(item.preco).toFixed(2)}</td>
                        <td>R$ ${subtotal.toFixed(2)}</td>
                    </tr>`;
            });

            if (spanTotal) {
                spanTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
            }
        }
    } catch (error) {
        console.error("Erro ao carregar itens da tabela:", error);
    }
}