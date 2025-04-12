
import { useState } from "react";

export default function AcompanhamentoFit() {
  const [dados, setDados] = useState([
    { semana: 1, pesoInicial: "", pesoFinal: "", cintura: "", abdomen: "", meta: "" },
    { semana: 2, pesoInicial: "", pesoFinal: "", cintura: "", abdomen: "", meta: "" },
    { semana: 3, pesoInicial: "", pesoFinal: "", cintura: "", abdomen: "", meta: "" },
    { semana: 4, pesoInicial: "", pesoFinal: "", cintura: "", abdomen: "", meta: "" },
  ]);

  const handleChange = (index, field, value) => {
    const novosDados = [...dados];
    novosDados[index][field] = value;
    setDados(novosDados);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Plano de Acompanhamento Fitness</h1>
      {dados.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
          <strong>Semana {item.semana}</strong>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
            <input
              placeholder="Peso Inicial (kg)"
              value={item.pesoInicial}
              onChange={(e) => handleChange(index, "pesoInicial", e.target.value)}
            />
            <input
              placeholder="Peso Final (kg)"
              value={item.pesoFinal}
              onChange={(e) => handleChange(index, "pesoFinal", e.target.value)}
            />
            <input
              placeholder="Cintura (cm)"
              value={item.cintura}
              onChange={(e) => handleChange(index, "cintura", e.target.value)}
            />
            <input
              placeholder="Abdômen (cm)"
              value={item.abdomen}
              onChange={(e) => handleChange(index, "abdomen", e.target.value)}
            />
            <input
              placeholder="Meta da Semana"
              value={item.meta}
              onChange={(e) => handleChange(index, "meta", e.target.value)}
              style={{ flex: "1 1 100%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
