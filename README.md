# Chat FURIA 

## 🏆 Status do Projeto

Em desenvolvimento.

## 🎯 Objetivo

Criar um web chat interativo para os fãs da FURIA, oferecendo informações sobre a história do time, seus e-sports, jogadores e curiosidades, além de permitir interações como visualizar skins favoritas dos jogadores.

## 🚀 Tecnologias Utilizadas

-   **React:** Biblioteca JavaScript para a criação da interface do usuário.
    * Funcionalidade: Responsável por construir a estrutura da página, gerenciar os componentes e atualizar a interface quando os dados mudam.
-   **TailwindCSS:** Framework CSS utilitário para estilização rápida e responsiva.
    * Funcionalidade: Permite a estilização dos componentes de forma eficiente, utilizando classes predefinidas para cores, espaçamento, layout, etc.
-   **JavaScript:** Linguagem de programação para a lógica da aplicação.
    * Funcionalidade: Implementa a lógica de interação do chat, manipulação de dados, respostas do bot e outras funcionalidades dinâmicas.
-   **React Scripts:** Conjunto de scripts e configurações para projetos React (create-react-app).
    * Funcionalidade: Fornece os scripts para executar, construir, testar e ejectar a aplicação React.

## ⚙️ Pré-requisitos

Antes de executar o projeto, você precisará ter as seguintes ferramentas instaladas em sua máquina:

-   **Node.js:** (Versão LTS recomendada) - [Link para download](https://nodejs.org/)
    * Funcionalidade: Ambiente de execução JavaScript que permite rodar o React e outras ferramentas no servidor.
-   **npm** (Gerenciador de pacotes do Node.js, instalado automaticamente com o Node.js)
    * Funcionalidade: Gerencia as dependências do projeto, instalando e atualizando as bibliotecas necessárias.
-   **Git:** (Para controle de versão e clonagem do repositório) - [Link para download](https://git-scm.com/)
    * Funcionalidade: Sistema de controle de versão que permite rastrear alterações no código e colaborar com outros desenvolvedores.
-   **VS Code** (Opcional, mas recomendado como editor de código) - [Link para download](https://code.visualstudio.com/)
    * Funcionalidade: Editor de código que facilita a escrita, leitura e organização do código.

## 🛠️ Como Rodar o Projeto

Siga estes passos para executar o projeto localmente:

1.  **Clone o repositório:**
    Se você já tiver o repositório no GitHub, clone-o para sua máquina usando o seguinte comando no terminal:
    ```bash
    git clone [https://docs.github.com/articles/referencing-and-citing-content](https://docs.github.com/articles/referencing-and-citing-content)
    ```
    Caso contrário, ignore este passo por enquanto, pois você ainda não subiu o projeto.

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd chat_bot
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    Este comando irá baixar todas as bibliotecas e dependências necessárias listadas no arquivo `package.json`.

4.  **Execute o projeto:**
    ```bash
    npm start
    ```
    Este comando irá iniciar o servidor de desenvolvimento. O projeto será geralmente aberto automaticamente no seu navegador em um endereço como `http://localhost:3000`.

## 💡 Funcionalidades

-   **Menu de Opções:**
    * Funcionalidade: Apresenta ao usuário uma lista de opções para interagir com o bot.
    * Opções:
        1.  O surgimento
        2.  Em quais e-sports compete
        3.  Os principais jogadores
        4.  Saber a mira do jogador
        5.  A skin favorita dele
        6.  Elogios e sugestões
-   **Informações sobre a FURIA:**
    * Funcionalidade: Fornece detalhes sobre a história do time e suas atividades.
    * O surgimento: História da fundação do time.
    * Em quais e-sports compete: Lista dos jogos (CS2, Valorant, League of Legends, Rocket League e Rainbow Six Siege).
    * Os principais jogadores (CS2): KSCERATO, yuurih, chelo, molodoy e FalleN.
-   **Detalhes dos Jogadores (CS2):**
    * Funcionalidade: Exibe informações específicas sobre os jogadores.
    * Skin favorita: Exibe a skin favorita de cada jogador com uma imagem
-   **Interação Conversacional:**
    * Funcionalidade: Permite ao usuário se comunicar com o bot através de mensagens de texto.
    * O usuário interage com o bot digitando mensagens.
    * O bot responde com base nas palavras-chave ou opções selecionadas.
-   **Tela de Abertura (Splash Screen):**
    * Funcionalidade: Exibe o logo da FURIA por 3 segundos ao iniciar o aplicativo para criar uma primeira impressão.
    **Interações que faltam adicionar**
    *Funcionadlidade: permite que o usario possa acompanhar os jogos mais recentes da furia, sua classificação e próximos campeonatos 

## 🖼️ Demonstração

[Aqui você poderá adicionar um link para um vídeo de demonstração do seu projeto, conforme solicitado no desafio.]

## 📂 Estrutura de Pastas
```text
chat_bot/
├── public/
│     └── index.html
│          * Funcionalidade: Arquivo HTML principal que renderiza a aplicação React.
├── src/
│     ├── assets/
│     │     └── images/
│     │          ├── CheloSkin.png
│     │          ├── FallenSkin.png
│     │          ├── FuriaLogo.png
│     │          ├── FuriaLogo.webp
│     │          ├── KsceratoSkin.webp
│     │          ├── Molodoy.webp
│     │          └── YuurihSkin.png
│     │               * Funcionalidade: Contém os arquivos de imagem utilizados na aplicação.
│     ├── components/
│     │     ├── ChatWindow.js
│     │     │       * Funcionalidade: Renderiza a área de exibição das mensagens do chat.
│     │     ├── InputArea.js
│     │     │       * Funcionalidade: Renderiza o campo de input para o usuário digitar mensagens.
│     │     └── MessageBubble.js
│     │          * Funcionalidade: Renderiza uma única mensagem no chat, com estilos diferentes para o usuário e o bot.
│     ├── pages/
│     │     ├── ChatPage.jsx
│     │     │       * Funcionalidade: Página principal do chat, que gerencia o estado das mensagens e a interação com o bot.
│     │     └── SplashScreen.jsx
│     │          * Funcionalidade: Tela de abertura que exibe o logo da FURIA.
│     ├── utils/
│     │     └── getBotResponse.js
│     │          * Funcionalidade: Contém a lógica para gerar as respostas do bot.
│     ├── App.js
│     │       * Funcionalidade: Componente principal que controla a exibição da tela de abertura e da página do chat.
│     ├── index.js
│     │       * Funcionalidade: Ponto de entrada da aplicação React, que renderiza o componente App no DOM.
│     └── styles/
│          └── index.css
│               * Funcionalidade: Arquivo CSS principal que inclui os estilos globais e o TailwindCSS.
├── .gitignore
│       * Funcionalidade: Especifica os arquivos e pastas que o Git deve ignorar.
├── package.json
│       * Funcionalidade: Contém as informações do projeto e as dependências.
├── package-lock.json
│       * Funcionalidade: Garante que as dependências sejam instaladas nas versões corretas.
├── postcss.config.js
│       * Funcionalidade: Configura o PostCSS, utilizado para processar o CSS.
└── tailwind.config.js
        * Funcionalidade: Configura o TailwindCSS, definindo as cores e outras opções de estilo.
```

## ✍️ Próximos Passos e Melhorias

-   Adicionar funcionalidade para salvar elogios e sugestões dos usuários.
-   Melhorar a lógica do chatbot para entender mais variações de perguntas.
-   Implementar testes unitários e de integração (opcional, mas recomendado para projetos maiores).
-   Otimizar a responsividade para diferentes tamanhos de tela.

## 🤝 Contribuição

[Se você quiser abrir o projeto para contribuições futuras, explique aqui como as pessoas podem contribuir.]

## 📄 Licença

[Se você quiser adicionar uma licença ao seu projeto, como MIT ou Apache, inclua as informações aqui.]

## 📧 Contato

[Se você quiser adicionar suas informações de contato, como e-mail ou LinkedIn, inclua aqui.]



