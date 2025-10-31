# Calculadora de IMC

Descrição
-------
Projeto simples em JavaScript que calcula o Índice de Massa Corporal (IMC) com base no peso e na altura informados pelo usuário. A aplicação pode ser usada em navegador como uma página estática ou integrada a outros projetos front-end.

Funcionalidades
-------
- Cálculo do IMC (kg/m²) a partir do peso (kg) e altura (m).
- Classificação do IMC (Abaixo do peso, Peso normal, Sobrepeso, Obesidade grau I/II/III) conforme parâmetros comuns.
- Validação básica de entrada (verifica se peso e altura são números positivos).
- Interface simples e responsiva (HTML/CSS/JavaScript).

Tecnologias
-------
- HTML5
- CSS3
- JavaScript (Vanilla)

Instalação
-------
1. Clone o repositório:
    git clone <URL-do-repositório>
2. Navegue até a pasta do projeto:
    cd calculadora_imc
3. Abra o arquivo `index.html` em um navegador web (duplo clique ou via servidor local).

Uso
-------
1. Insira seu peso em quilogramas (kg).
2. Insira sua altura em metros (m) — exemplo: 1.75.
3. Clique em "Calcular" para ver o valor do IMC e a classificação correspondente.
4. Ajuste os valores para novos cálculos.

Exemplo de classificação (padrões comuns)
-------
- Abaixo do peso: IMC < 18.5
- Peso normal: 18.5 ≤ IMC < 25
- Sobrepeso: 25 ≤ IMC < 30
- Obesidade grau I: 30 ≤ IMC < 35
- Obesidade grau II: 35 ≤ IMC < 40
- Obesidade grau III: IMC ≥ 40

Estrutura sugerida de arquivos
-------
- index.html — interface principal
- styles.css — estilos visuais
- script.js — lógica de cálculo do IMC e interação

Boas práticas e melhorias sugeridas
-------
- Melhorar validações de entrada e tratamento de erros.
- Adicionar testes unitários para a função de cálculo do IMC.
- Internacionalização (i18n) para suportar outros idiomas.
- Armazenar histórico de cálculos no localStorage.
- Tornar a interface mais acessível (WCAG).

Contribuindo
-------
Contribuições são bem-vindas! Abra uma issue para discutir mudanças ou envie um pull request com suas melhorias. Por favor, siga as convenções de código do projeto e inclua descrições claras nas PRs.

Licença
-------
Defina a licença desejada (ex.: MIT) no arquivo LICENSE. Se não for especificada, considere adicionar uma licença antes de publicar.

Contato
-------
Para dúvidas ou sugestões, abra uma issue no repositório.
# calculadora_imc
Calculadora IMC em JavaScript
