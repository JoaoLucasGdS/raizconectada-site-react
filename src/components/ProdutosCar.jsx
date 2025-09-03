import { useState } from "react";

export default function App() {
  // Lista inicial de produtos
  const produtosIniciais = [
    { id: 1, nome: "BANANA", agricultor: "agricultor x", preco: 5, quantidade: 1, img: "/IMG/banana.jpg" },
    { id: 2, nome: "UVA", agricultor: "agricultor y", preco: 5, quantidade: 1, img: "/IMG/uva.jpg" },
    { id: 3, nome: "LARANJA", agricultor: "agricultor z", preco: 5, quantidade: 1, img: "/IMG/laranja.jpg" },
  ];

  const [produtos, setProdutos] = useState(produtosIniciais);

  // Atualizar quantidade de um produto
  const atualizarQuantidade = (id, qtd) => {
    setProdutos(produtos.map(p => 
      p.id === id ? { ...p, quantidade: qtd } : p
    ));
  };

  // Calcular totais
  const subtotal = produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0);
  const entrega = 5; // valor fixo só como exemplo
  const total = subtotal + entrega;

  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      {/* Lista de produtos */}
      <div style={{ flex: 2 }}>
        {produtos.map(p => (
          <div key={p.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", marginBottom: "10px", background: "#f3f3f3" }}>
            <img src={p.img} alt={p.nome} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
            
            <div style={{ flex: 1, textAlign: "center" }}>
              <strong>{p.nome}</strong><br />
              {p.agricultor}
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
              <div>PREÇO<br />R${p.preco}</div>
              <div>
                QUANTIDADE<br />
                <input
                  type="number"
                  min="1"
                  value={p.quantidade}
                  onChange={(e) => atualizarQuantidade(p.id, Number(e.target.value))}
                  style={{ width: "50px" }}
                />
              </div>
              <div>TOTAL<br />R${p.preco * p.quantidade}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Resumo */}
      <div style={{ flex: 1, background: "#0a3314", color: "white", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Subtotal:</span>
          <span>R${subtotal}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Entrega:</span>
          <span>R${entrega}</span>
        </div>
        <hr style={{ margin: "10px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
          <span>TOTAL:</span>
          <span>R${total}</span>
        </div>
        <button style={{ marginTop: "20px", width: "100%", padding: "10px", background: "green", color: "white", fontWeight: "bold", border: "none" }}>
          COMPRAR
        </button>
      </div>
    </div>
  );
}
