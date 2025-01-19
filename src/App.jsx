import lampadaMagica from "./assets/lampadaMagica.png";
import genioLampada from "./assets/genioLampada.png";
import "./app.scss";

import { useState } from "react";

export default function App() {
  // estrutura:
  // variavel [valorAtual, funcão que pode atualizar o valor atual] = useState(valorInicial)

  const [imagem, setImagem] = useState(lampadaMagica);

  // função para a imagem ser trocada com arrow function
  const mudarImagem = () => {
    // O imagemAtual é o valor atual da variável imagem
    setImagem((estadoAtual) =>
      // Operador Condicional Ternário
    estadoAtual === lampadaMagica ? genioLampada : lampadaMagica
    );
  };

  // Outra forma de realizar a função co if e else:
  // const mudarImagem = () => {
  //   setImagem((imagemAtual) => {
  //     if (imagemAtual === lampadaMagica) {
  //       return genioLampada;
  //     } else {
  //       return lampadaMagica; 
  //     }
  //   });
  // };

  return (
    <main>
      <p>"Liberte a magia da programação com a lâmpada de Aladim."</p>
      <img
        src={imagem}
        alt="Imagem da lâmpada mágica / Imagem do gênio da lâmpada do Aladdin"
      />

      {/* onClick: um evento que escuta quando o usuário clica no botão */}
      <button onClick={mudarImagem}>Clique Aqui</button>
    </main>
  );
}
