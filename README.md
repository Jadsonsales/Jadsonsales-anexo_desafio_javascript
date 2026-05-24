# Desafio Sprint - JavaScript Orientado a Objetos

Este repositório contém a minha resolução para o Desafio da Sprint de JavaScript, onde o objetivo principal foi aplicar conceitos de Orientação a Objetos (Classes, Métodos e Encapsulamento) e manipulação dinâmica do DOM para dar vida a um site institucional da Ford.

Recebi a estrutura visual estática (HTML e CSS) da aplicação e desenvolvi toda a camada de interatividade utilizando JavaScript puro (Vanilla JS), seguindo as boas práticas de programação indicadas pelo líder técnico.

---

## 🛠️ Funcionalidades Desenvolvidas

### 1. Carrossel Automatizado de Imagens (`carousel.js`)
* Desenvolvi um mecanismo de transição automática na página principal (`index.html`) que altera a imagem do veículo, o título e o link correspondente a cada 2 segundos.
* Criei a classe `Carousel` e organizei seus atributos e construtor para gerenciar os dados dos slides de forma limpa.
* Utilizei o poder do Flexbox para alinhar botões direcionais (setas esquerda e direita) perfeitamente ao horizonte da imagem, permitindo que o usuário navegue manualmente e resetando o temporizador de forma inteligente para evitar conflitos de tempo.

### 2. Comparador de Veículos em Tempo Real (`compare.js`)
* Implementei a classe `Car` com seu construtor completo para mapear todas as especificações técnicas das picapes (preço, dimensões, motor, potência, etc.).
* Criei regras de negócio estritas nas funções de marcação dos checkboxes: o sistema valida e limita a seleção para no máximo 2 veículos simultâneos, exibindo alertas caso as condições não sejam atendidas.
* Desenvolvi a lógica para injetar dinamicamente todos os dados técnicos dos carros selecionados diretamente nas células de uma tabela HTML oculta (pop-up/modal), que é exibida assim que o usuário clica em "Comparar Carros".

### 3. Captura de Formulário e Efeitos Visuais (`form.js`)
* Ajustei o formulário da página de contato (`contato.html`) para coletar exatamente os campos solicitados: Nome, E-mail, Telefone, Tipo de Contato (Elogio, Reclamação ou Solicitação) e Mensagem.
* Criei a classe `Contato` para estruturar esses dados e utilizei o método `preventDefault()` para interceptar o envio, simulando uma integração ao salvar e exibir o objeto completo diretamente no console do navegador (`console.log`).
* Adicionei efeitos visuais modernos via CSS (Hover) no botão "Enviar", fazendo com que ele aumente de tamanho (escala) e mude de cor de forma suave ao passar o cursor.

---

## 💻 Tecnologias Utilizadas

* **HTML5** (Estrutura e semântica de páginas fornecidas no desafio)
* **CSS3** (Estilização de layouts, Flexbox e efeitos de transição)
* **JavaScript (ES6+)** (Lógica de programação, manipulação do DOM, tratamento de eventos e Orientação a Objetos)
* **Git & GitHub** (Controle de versão através do uso estratégico de branches e merges no terminal)

---

## 🔧 Como Testar o Projeto Localmente

1. https://github.com/Jadsonsales/Jadsonsales-anexo_desafio_javascript/
