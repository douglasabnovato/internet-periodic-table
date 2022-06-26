let themeToggler = document.getElementById("theme-toggler");

let modeDarkTheme = localStorage.getItem('theme');

document.documentElement.setAttribute("data-theme", modeDarkTheme);

themeToggler.addEventListener("click", () => {
  
  let targetTheme;
  let currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    targetTheme = "light";
  } else {
    targetTheme = "dark";
  }

  localStorage.setItem("theme", targetTheme);
  document.documentElement.setAttribute("data-theme", targetTheme);

});

function main() {
  const companies = getData();
  renderTable(companies);

  const groups = [...new Set(companies.map((c) => c.Grupo))];
  renderLegend(groups);

  setEventListeners();
}

function renderTable(companies) {
  render(companies, "table-inner", createTableItem);
}

function renderLegend(groups) {
  render(groups, "legend-inner", createLegendItem);
}

function createTableItem(company) {
  let tableItem = document.createElement("div");
  tableItem.tabIndex = "0";
  tableItem.className = "table-item";
  tableItem.style.gridRow = company.Linha;
  tableItem.style.gridColumn = company.Coluna;
  tableItem.style.color = company.Cor;
  tableItem.style.backgroundColor = company.Cor;
  tableItem.addEventListener("click", () => onTableItemClicked(company));
  tableItem.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      onTableItemClicked(company);
    }
    if (e.which === 32) {
      e.preventDefault();
      onTableItemClicked(company);
    }
  });

  let tableItemInner = document.createElement("div");
  tableItemInner.className = "table-item-inner";
  tableItemInner.classList.add(toAttr(company.Grupo));

  let shortTitle = document.createElement("div");
  shortTitle.className = "short-title";
  shortTitle.innerHTML = company.Abreviacao;

  let title = document.createElement("div");
  title.className = "title";
  title.innerHTML = company.Nome;

  tableItem.appendChild(tableItemInner);
  tableItemInner.appendChild(shortTitle);
  tableItemInner.appendChild(title);

  return tableItem;
}

function createLegendItem(group) {
  let legendItem = document.createElement("div");
  legendItem.tabIndex = "0";
  legendItem.className = "legend-item";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = toAttr(group);
  checkbox.addEventListener("click", (e) => onLegendItemClicked(e.target));

  let marker = document.createElement("div");
  marker.className = "legend-item-marker";

  let markerColor = document.querySelector("." + toAttr(group)).parentElement
    .style.color;
  marker.style.backgroundColor = markerColor;

  let label = document.createElement("label");
  label.htmlFor = toAttr(group);
  label.innerHTML = group;

  legendItem.appendChild(checkbox);
  legendItem.appendChild(marker);
  legendItem.appendChild(label);

  return legendItem;
}

function onTableItemClicked(company) {
  title = document.querySelector(".modal-title");
  title.style.color = company.Cor;
  title.innerHTML = company.Nome;

  let group = document.querySelector(".modal-group");
  group.style.color = company.Cor;
  group.innerHTML = company.Grupo;

  document.querySelector(".modal-description").innerHTML = company.Descricao;
  document.querySelector(".modal").style.display = "flex";
}

function onLegendItemClicked(legendItem) {
  let tableItems = document.getElementsByClassName(legendItem.id);

  if (legendItem.checked) {
    legendItem.parentElement.classList.add("selected");

    for (const item of tableItems) {
      item.classList.add("highlight");
    }
  } else {
    legendItem.parentElement.classList.remove("selected");
    for (const item of tableItems) {
      item.classList.remove("highlight");
    }
  }
}

function render(iterable, rootElementId, createHTMLElement) {
  const rootElement = document.getElementById(rootElementId);
  rootElement.innerHTML = "";

  for (const item of iterable) {
    rootElement.appendChild(createHTMLElement(item));
  }
}

function toAttr(string) {
  return string.replaceAll(" ", "-").toLowerCase();
}

function setEventListeners() {
  window.addEventListener("click", (e) => closeModal(e));
  document.addEventListener("keydown", (e) => closeModal(e));
}

function closeModal(e) {
  const target = e.target.className;

  if (target === "modal" || target === "modal-close" || e.key === "Escape") {
    document.querySelector(".modal").style.display = "none";
  }
}

function getData() {
  return [
    {
      Abreviacao: "Li",
      Coluna: 1,
      Cor: "#CBC634",
      Descricao:
        "Dê agora o próximo passo em seu futuro profissional. Mais de 740 milhões de membros em todo o mundo estão esperando por você. Crie um perfil. 14 milhões de vagas. Comunidade profissional. Candidate-se facilmente. Cadidaturas facilitadas. Recomendações de vagas.",
      Grupo: "Social Media",
      Linha: 1,
      Nome: "Linkedin",
    },
    {
      Abreviacao: "Fb",
      Coluna: 2,
      Cor: "#CBC634",
      Descricao:
        "Facebook é uma rede social que conecta usuários em todo o mundo. Por meio de perfis — pessoais e profissionais —, é possível encontrar e conhecer pessoas, acompanhar personalidades públicas e marcas, criar, consumir e compartilhar conteúdos e muito mais. Por meio dele, o usuário também pode conversar via chat online com seus amigos e entrar em contato com empresas. Além disso, o Facebook dispõe de ferramentas que viabilizam a compra e venda de produtos dentro da plataforma. O aplicativo também disponibiliza uma série de integrações que vão desde jogos e testes até a sincronização de e-commerces e catálogos online.",
      Grupo: "Social Media",
      Linha: 1,
      Nome: "Facebook",
    },
    {
      Abreviacao: "Db",
      Coluna: 7,
      Cor: "#5A88E5",
      Descricao:
        "Dribbble é uma comunidade online para a exposição de conteúdo artístico. Funciona como uma plataforma de autopromoção e networking para design gráfico, web design, ilustração, fotografia, e outras áreas criativas. Foi fundada em 2009 por Dan Cederholm and Rich Thornett, tornando-se pública em 2010.",
      Grupo: "Personal Development",
      Linha: 1,
      Nome: "Dribbble",
    },
    {
      Abreviacao: "Ct",
      Coluna: 8,
      Cor: "#58AC30",
      Descricao:
        "No contexto de ciência da computação, gerenciamento de dados e controle de versão, commit refere-se ao processo de tornar permanente um conjunto de alterações, ou seja, de efetivar as alterações. Um uso comum é a conclusão de uma transação.",
      Grupo: "Serious Work",
      Linha: 1,
      Nome: "Commits",
    },
    {
      Abreviacao: "Sl",
      Coluna: 9,
      Cor: "#58AC30",
      Descricao:
        "O Slack é um app de mensagens para empresas que conecta as pessoas às informações de que elas precisam. Reunindo pessoas para trabalhar como uma equipe unificada, o Slack transforma a forma como as organizações se comunicam.",
      Grupo: "Serious Work",
      Linha: 1,
      Nome: "Slack",
    },
    {
      Abreviacao: "Wk",
      Coluna: 1,
      Cor: "#FF616D",
      Descricao:
        "A Wikipédia é um projeto de enciclopédia multilíngue de licença livre, baseado na web e escrito de maneira colaborativa.",
      Grupo: "Fun Stuff",
      Linha: 2,
      Nome: "Wikipedia",
    },
    {
      Abreviacao: "Sp",
      Coluna: 2,
      Cor: "#FF616D",
      Descricao:
        "Spotify é um serviço de streaming de música, podcast e vídeo que foi lançado oficialmente em 7 de outubro de 2008. É o serviço de streaming de música mais popular e usado do mundo. Ele é desenvolvido pela startup Spotify AB em Estocolmo, Suécia.",
      Grupo: "Fun Stuff",
      Linha: 2,
      Nome: "Spotify",
    },
    {
      Abreviacao: "Tw",
      Coluna: 3,
      Cor: "#CBC634",
      Descricao:
        "Twitter é uma rede social e um serviço de microblog, que permite aos usuários enviar e receber atualizações pessoais de outros contatos, por meio do website do serviço, por SMS e por softwares específicos de gerenciamento.",
      Grupo: "Social Media",
      Linha: 2,
      Nome: "Twitter",
    },
    {
      Abreviacao: "Tc",
      Coluna: 4,
      Cor: "#CBC634",
      Descricao:
        "Twitch é um serviço de streaming de vídeo ao vivo que se concentra em streaming ao vivo de videogame, incluindo transmissões de competições de esportes eletrônicos. Além disso, oferece transmissões de música, conteúdo criativo e mais recentemente, streams na vida real.",
      Grupo: "Social Media",
      Linha: 2,
      Nome: "Twitch",
    },
    {
      Abreviacao: "Gt",
      Coluna: 5,
      Cor: "#58AC30",
      Descricao:
        "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.",
      Grupo: "Serious Work",
      Linha: 2,
      Nome: "Github",
    },
    {
      Abreviacao: "Yn",
      Coluna: 6,
      Cor: "#58AC30",
      Descricao:
        "O Yarn é um sistema de empacotamento de software desenvolvido em 2016 pelo Facebook para o ambiente de tempo de execução JavaScript Node.js.",
      Grupo: "Serious Work",
      Linha: 2,
      Nome: "Yarn",
    },
    {
      Abreviacao: "ll",
      Coluna: 7,
      Cor: "#5A88E5",
      Descricao:
        "Designed 100 awesome illustrations during 100 days of illustration challenge (Now added more than 120+ illustrations). You can download all illustrations completely free and use these to design awesome - landing pages, mobile app or presentations.",
      Grupo: "Personal Development",
      Linha: 2,
      Nome: "Ilustratin",
    },
    {
      Abreviacao: "Te",
      Coluna: 8,
      Cor: "#5A88E5",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Personal Development",
      Linha: 2,
      Nome: "TellyStat",
    },
    {
      Abreviacao: "Wu",
      Coluna: 9,
      Cor: "#5A88E5",
      Descricao:
        "Wunderlist é um aplicativo de gerenciamento de tarefas baseado em nuvem descontinuado. Permitiu que os usuários criassem listas para gerenciar suas tarefas a partir de um smartphone, tablet, computador e smartwatch.",
      Grupo: "Personal Development",
      Linha: 2,
      Nome: "Wunderlist",
    },
    {
      Abreviacao: "Cv",
      Coluna: 1,
      Cor: "#FF616D",
      Descricao:
        "Cozedura, cozimento ou cocção é uma técnica culinária que consiste na preparação de alimentos mediante a utilização de calor, com o intuito de viabilizar ou facilitar a ingestão.",
      Grupo: "Fun Stuff",
      Linha: 3,
      Nome: "Cooking",
    },
    {
      Abreviacao: "Dg",
      Coluna: 2,
      Cor: "#FF616D",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Fun Stuff",
      Linha: 3,
      Nome: "Dog Gifs",
    },
    {
      Abreviacao: "Tg",
      Coluna: 3,
      Cor: "#FF616D",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Fun Stuff",
      Linha: 3,
      Nome: "Toggl Blo",
    },
    {
      Abreviacao: "Gg",
      Coluna: 4,
      Cor: "#5A88E5",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Personal Development",
      Linha: 3,
      Nome: "Google",
    },
    {
      Abreviacao: "Ex",
      Coluna: 5,
      Cor: "#5A88E5",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Personal Development",
      Linha: 3,
      Nome: "Excel",
    },
    {
      Abreviacao: "So",
      Coluna: 6,
      Cor: "#58AC30",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Serious Work",
      Linha: 3,
      Nome: "StackOv.",
    },
    {
      Abreviacao: "Cd",
      Coluna: 7,
      Cor: "#58AC30",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Serious Work",
      Linha: 3,
      Nome: "Coding",
    },
    {
      Abreviacao: "Cp",
      Coluna: 8,
      Cor: "#5A88E5",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Personal Development",
      Linha: 3,
      Nome: "Codepen",
    },
    {
      Abreviacao: "Tr",
      Coluna: 9,
      Cor: "#5A88E5",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Personal Development",
      Linha: 3,
      Nome: "Travel",
    },
    {
      Abreviacao: "In",
      Coluna: 2,
      Cor: "#CBC634",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Social Media",
      Linha: 4,
      Nome: "Instagram",
    },
    {
      Abreviacao: "Mu",
      Coluna: 3,
      Cor: "#FF616D",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Fun Stuff",
      Linha: 4,
      Nome: "Musicals",
    },
    {
      Abreviacao: "Me",
      Coluna: 4,
      Cor: "#FF616D",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Fun Stuff",
      Linha: 4,
      Nome: "Memes",
    },
    {
      Abreviacao: "No",
      Coluna: 5,
      Cor: "#CBC634",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Social Media",
      Linha: 4,
      Nome: "Notion",
    },
    {
      Abreviacao: "Re",
      Coluna: 6,
      Cor: "#CBC634",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Social Media",
      Linha: 4,
      Nome: "Reddit",
    },
    {
      Abreviacao: "Rd",
      Coluna: 7,
      Cor: "#CBC634",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Social Media",
      Linha: 4,
      Nome: "Research",
    },
    {
      Abreviacao: "St",
      Coluna: 8,
      Cor: "#CBC634",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Social Media",
      Linha: 4,
      Nome: "Stats",
    },
    {
      Abreviacao: "Ad",
      Coluna: 9,
      Cor: "#CBC634",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Social Media",
      Linha: 4,
      Nome: "Ads",
    },
    {
      Abreviacao: "Dg",
      Coluna: 1,
      Cor: "#DDDAA7",
      Descricao:
        "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
      Grupo: "Teste",
      Linha: 5,
      Nome: "Dgs",
    },
  ];
}

main();
