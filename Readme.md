<h4 align="center"> 
	🚧 Tabela Periódica da Internet 🚀
</h4> 

<h1 align="center">
    <img alt="Tabela Periódica da Internet" title="#InternetPeriodicTable" src="./.github/tela-0.jpg" />
</h1>

## 🚀 Descrição do Desafio

Esse desafio é uma forma de conhecer um pouco mais da rotina como programador(a) e a forma de pensar o cotidiano de um Front-End. 

Não será avaliado somente o código, mas também a motivação da solução apresentada, seja ela qual for.

Baseado no arquivo `empresas.json`, deve ser construído uma tabela onde é visualizado alguns sites da internet, separados pelos seguintes grupos: "Social Media", "Serious Work", "Personal Development" e "Fun Stuff". 

A base para a diagramação das informações visualizadas no arquivo json será 
- [Codepen Projeto A](https://codepen.io/oliviale/pen/ZmvPPd)

Exemplos de inspirações de apps criados: 
- [Demo Projeto 1](https://drive.google.com/file/d/1ytAPwfjS1RTQeLs031-NV_DKB7ZsA7KL/view?usp=sharing) 
- [Demo Projeto 2](https://drive.google.com/file/d/1TAYMbZJ1Rt9MoEwWJyQfmkjndmxrLXze/view?usp=sharing)
- [Demo Projeto 3](https://drive.google.com/file/d/1Klq4GgfCZYygFGg8mBMZC_cO1VXo-eWn/view?usp=sharing)

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Css][css]: posicionamento, dimensionamento e muito mais
- [Javascript][javascript]: responsividade
- [HTML][html]: estrutura e efeitos 
- [Git][git]: controle de versão e gestão de projetos
- [Github][github]: repositório remoto para compartilharmento de código

### Desafios Principais

- [x] ProDoc101: Criar a tabela baseada no JSON fornecido, primeiramente estaticamente: a função getData() é responsável por fornecer os dados originais. Então, a função main chama a função renderTable passando os dados conforme precisa. A função renderTable manipula o html via DOM para renderizar conforme estilização.
- [x] ProDoc102: Adicionar um efeito de hover que destaque o item da tabela ao passar o mouse sobre ele: recebe um tom forte da color base: efeito hover realizado no css com .table-item:hover e a DOM manipulou em createTableItem.
- [x] ProDoc103: Adicionar um efeito de destacar os itens deste agrupamento, ao clicar em um item na legenda, todos ficam em um tom forte da color base. A função onLegendItemClicked é a responsável por selecionar todos os elementos da tabela que correspondem ao grupo da legenda. Ela é chamada pela createLegendItem com o evento que fica "ouvindo" o clica.
- [x] ProDoc104: Aplicar estratégias de responsividade, mas sempre mantendo o aspecto de tabela periódica. Ficar flexíveis para caber em 1024px da tela sem distorção. Abaixo desta resolução, deve ser criado uma barra de rolagem ou algo criativo que possa ser utilizado em dispositivos móveis: uma media para organizar a legenda em colunas quando atinge max-width: 750px, e em #table-inner na linha min-width: 1024px para garantir que menor que esse width apresente uma barra de rolagem (#table{overflow-x: auto;}) para visualizar a tabela inteira mas sem quebrar as linhas usando display: grid.

### Desafios Extras

- [x] ProDoc201: Ao clicar sobre um elemento, abrir um modal que apresente a informação de descrição. Utilizar a propriedade "Descrição" presente no JSON de referência: a função onTableItemClicked é responsável por abrir o modal com as informações conforme o item clicado. A função createTableItem é a que chama essa função e é a responsável por identifical quais as informações irão ser exibidas nesse modal. 
- [x] ProDoc202: O modal deve fechar ao clicar fora da área de conteúdo, mas o ideal é que seja criado também um botão (X) auxiliar que serve para fechá-lo: a função setEventListeners é responsável por atender a essas duas maneiras de fechar o modal e é colocada a disposição sendo chamada no main, assim que inicializa a aplicação.
- [x] ProDoc203: E mais desejável ainda é que ao apertar a tecla ESC, o modal também seja fechado: pesquisando a melhor forma de fazer: a função closeModal é a responsável por fechar o modal quando usado a tecla ESC com e.key === "Escape".
- [x] ProDoc204: Opções de acessibilidade no teclado, como trocar o foco dos itens na tabela ao apertar a tecla tab e acessar o modal apertando as teclas barra de espaço ou enter: fazer o gerenciamento do foco através da tecla tab com tableItem.tabIndex ="0" na criação do elemento da tabela e também com legendItem.tabIndex ="0" na criação do elemento da legenda. Agora para acionar como um clicar com space ou enter utilizar keycode de enter em string e space em inteiro no elemento da tabela.
- [x] ProDoc205: Criar um botão na tela que ao clicar, contemple os temas escuro e claro: inserido uma imagem para mudar de tema dark e light: no header é inserido um botão que é um toggle que muda conforme o estado atual. Alternando dark e light.
- [ ] ProDoc206: A tabela deve ser dinâmica, caso um novo elemento seja adicionado ao JSON, ele deve ser adicionado visualmente a tabela;
- [ ] ProDoc207: Caso um novo elemento de um novo grupo seja adicionado ao JSON, o efeito de selecionar o grupo na legenda deve contemplar esse novo elemento.

Esse roteiro é apenas um norte de opções para realizar o desafio, mas você está livre para fazer outras coisas. Não se limite em termos de criatividade.  

**"O mais importante para nós, é você ser uma pessoa disposta a aprender do que alguém que já "sabe tudo"."**

#### Meu planejamento

- [x] ProDoc301: Utilizar o git para versionamento e github para gestão de projeto: Registrar os commits e permitir acompanhar as tarefas no board de forma automatizada com as issues.
- [x] ProDoc302: Publicar a aplicação em um servidor gratuito: Utilizado o github.io permitindo acessar em [periodic table on github.io](https://douglasabnovato.github.io/internet-periodic-table/);
- [x] ProDoc303: Editar ícones e links de redes sociais para meus perfis: direcionando para os meus perfils
- [x] ProDoc304: Ter uma prévia descrição quando passa o mouse sobre o elemento: adiado
- [x] ProDoc305: Adicionar essa prévia descrição via json: adiado
- [x] ProDoc306: Salvar a preferência do tema escolhido via localstorage 
- [ ] ProDoc307: html bem elaborado, exemplo: rel="noopener": link aberto com dependência com a página de origem, proteção 
- [ ] ProDoc308: trabalhar persistência do dark e light seguindo as preferências do so: "prefers - css - color - schema", mac magazine
- [x] ProDoc309: mobile first: atendendo as especificações no desktop e no mobile.
- [x] ProDoc310: off line (mensagem "disponível"): essa aplicação consegue seguir off line com a proposta

#### Melhorias

- [x] ProDoc401: aprender manipular json: tornando a tabela dinâmica conforme alterações no json
- [x] ProDoc402: inserir hover e melhor posicionar o botão do tema
- [x] ProDoc403: barra de rolagem vertical
- [x] ProDoc404: cores de textos em modo light
- [x] ProDoc405: inserir um texto real no modal: alguns textos
- [x] ProDoc406: inserir logo do app no modal: adiado
- [x] ProDoc407: criar issues e tarefas board projects para cada tarefa do desafio: rodando git flow e kanban para simular interações.

#### Next Step

- [ ] ProDoc501: marcar o grupo da legenda com space ou enter conforme acessibilidade
- [ ] ProDoc502: revisar as variáveis usadas no css
 
#### Analisar itens de maior complexidade 

1. o css do degradê 
2. o clique para abertura do modal
3. o efeito de seleção conforme o marcar/desmarcar na legenda
4. o posicionamento da tabela ao clicar na legenda 
<img alt="dificuldade" title="#dificuldade" src="./.github/dificuldade.jpeg" width="400px">

#### Aprendizado

1. atenção ao prazo e por isso, acompanhar o tempo de resolução de cada uma das tarefas para conseguir cumprir as entregas dentro do planejado
2. diante do problema, pesquisar, rascunhar soluções, tentar resolver, mas caso não conseguir dentro de um prazo, perguntar e buscar orientações de forma inteligente
3. ser objetivo na resolução das tarefas propostas

## 🛠 Versão Final

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Tabela Periódica da Internet" title="#InternetPeriodicTable" src="./.github/tela-0.jpg" width="400px"> 
  <img alt="Tabela Periódica da Internet" title="#InternetPeriodicTable" src="./.github/tela-5.jpg" width="400px">
  <img alt="Tabela Periódica da Internet" title="#InternetPeriodicTable" src="./.github/tela-1.jpg" width="400px">
  <img alt="Tabela Periódica da Internet" title="#InternetPeriodicTable" src="./.github/tela-4.jpg" width="400px"> 
  <img alt="Tabela Periódica da Internet" title="#InternetPeriodicTable" src="./.github/tela-2.jpg" width="400px">
  <img alt="Tabela Periódica da Internet" title="#InternetPeriodicTable" src="./.github/tela-3.jpg" width="400px"> 
</p>

[git]: https://git-scm.com/doc
[github]: https://docs.github.com/en
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS 
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML
[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
