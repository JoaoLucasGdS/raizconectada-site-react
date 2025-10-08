// Cart.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * Componente de carrinho totalmente internacionalizado.
 * - Os produtos usam chaves (nome/agricultor) que são traduzidas com `t()`.
 * - Formatação de moeda com Intl/Locale (pt-BR).
 * - Quantidade mínima = 1.
 */

export default function Cart() {
  const { t } = useTranslation();

  // dados "idioma-agnósticos" (chaves usadas nas traduções)
  const produtosIniciais = [
    {
      id: 1,
      nome: "banana",        // chave -> t('cart.banana')
      agricultor: "farmerX", // chave -> t('cart.farmerX')
      preco: 5,
      quantidade: 1,
      img: "/products/p1.jpg",
    },
    {
      id: 2,
      nome: "grape",
      agricultor: "farmerY",
      preco: 5,
      quantidade: 1,
      img: "/products/p10.jpg",
    },
    {
      id: 3,
      nome: "orange",
      agricultor: "farmerZ",
      preco: 5,
      quantidade: 1,
      img: "/products/p4.jpg",
    },
  ];

  const [produtos, setProdutos] = useState(produtosIniciais);

  const atualizarQuantidade = (id, qtd) => {
    // garante número inteiro >= 1
    const novaQtd = Number.isNaN(Number(qtd)) ? 1 : Math.max(1, Math.floor(Number(qtd)));
    setProdutos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantidade: novaQtd } : p))
    );
  };

  const subtotal = produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0);
  const entrega = 5; // valor fixo de exemplo
  const total = subtotal + entrega;

  const formatCurrency = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const handleBuy = () => {
    // comportamento simples — você pode integrar com checkout real
    alert(`${t("cart.buy")} — ${formatCurrency(total)}`);
  };

  return (
    <div style={{ display: "flex", padding: 20, gap: 20, alignItems: "flex-start" }}>
      {/* Lista de produtos */}
      <div style={{ flex: 2 }}>
        {produtos.map((p) => (
          <div
            key={p.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
              marginBottom: 10,
              background: "#f3f3f3",
              borderRadius: 8,
            }}
          >
            <img
              src={p.img}
              alt={t(`cart.${p.nome}`)}
              style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 6 }}
            />

            <div style={{ flex: 1, textAlign: "center", padding: "0 12px" }}>
              <strong>{t(`cart.${p.nome}`)}</strong>
              <div style={{ fontSize: 12, color: "#444" }}>{t(`cart.${p.agricultor}`)}</div>
            </div>

            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#666" }}>{t("cart.price")}</div>
                <div style={{ fontWeight: "600" }}>{formatCurrency(p.preco)}</div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#666" }}>{t("cart.quantity")}</div>
                <input
                  aria-label={`${t("cart.quantity")} ${t(`cart.${p.nome}`)}`}
                  type="number"
                  min="1"
                  value={p.quantidade}
                  onChange={(e) => atualizarQuantidade(p.id, e.target.value)}
                  style={{ width: 64, padding: 6, borderRadius: 6, border: "1px solid #ccc", textAlign: "center" }}
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#666" }}>{t("cart.total")}</div>
                <div style={{ fontWeight: "600" }}>{formatCurrency(p.preco * p.quantidade)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resumo */}
      <aside style={{ flex: 1, background: "#0a3314", color: "white", padding: 20, borderRadius: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span>{t("cart.subtotal")}:</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span>{t("cart.delivery")}:</span>
          <span>{formatCurrency(entrega)}</span>
        </div>

        <hr style={{ margin: "10px 0", borderColor: "rgba(255,255,255,0.12)" }} />

        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "700", fontSize: 18 }}>
          <span>{t("cart.total")}:</span>
          <span>{formatCurrency(total)}</span>
        </div>

        <button
          onClick={handleBuy}
          style={{
            marginTop: 20,
            width: "100%",
            padding: 12,
            background: "#2ecc71",
            color: "#022",
            fontWeight: "700",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          {t("cart.buy")}
        </button>
      </aside>
    </div>
  );
}
