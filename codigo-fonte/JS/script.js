
    const calcular = document.getElementById("calcular");
    const formulario = document.getElementById("formulario");

    calcular.addEventListener("click", () => {
      const peso = parseFloat(document.getElementById("peso").value);
      const altura = parseFloat(document.getElementById("altura").value) / 100;

      if (!peso || !altura) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      const imc = peso / (altura * altura);
      let classificacao = "";

      if (imc < 18.5) classificacao = "Abaixo do peso";
      else if (imc < 24.9) classificacao = "Peso normal";
      else if (imc < 29.9) classificacao = "Sobrepeso";
      else if (imc < 34.9) classificacao = "Obesidade grau I";
      else if (imc < 39.9) classificacao = "Obesidade grau II";
      else classificacao = "Obesidade grau III";

      formulario.innerHTML = `
        <div class="resultado-card">
          <h3>Seu IMC é</h3>
          <div class="valor">${imc.toFixed(1)}</div>
          <div class="classificacao">${classificacao}</div>
          <div class="linha"></div>
          <div class="tabela">
            <strong>Classificação do IMC:</strong><br>
            &lt; 18,5 - Abaixo do peso<br>
            18,5 - 24,9 - Peso normal<br>
            25,0 - 29,9 - Sobrepeso<br>
            30,0 - 34,9 - Obesidade grau I<br>
            35,0 - 39,9 - Obesidade grau II<br>
            ≥ 40,0 - Obesidade grau III
          </div>
          <button class="btn-novo" onclick="window.location.reload()">Calcular Novamente</button>
        </div>
      `;
    });
  