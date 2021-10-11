

let themeToggler = document.getElementById("theme-toggler");

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

    const groups = [...new Set(companies.map(c => c.Grupo))];
    renderLegend(groups);

    setEventListeners();
}

function renderTable(companies) {
    render(companies, 'table-inner', createTableItem);
}

function renderLegend(groups) {
    render(groups, 'legend-inner', createLegendItem);
}

/** Returns an HTML element of the table item. */
function createTableItem(company) {
    let tableItem = document.createElement('div');
    tableItem.className = 'table-item';
    tableItem.style.gridRow = company.Linha;
    tableItem.style.gridColumn = company.Coluna;
    tableItem.style.color = company.Cor;
    tableItem.style.backgroundColor = company.Cor;
    tableItem.addEventListener('click', () => onTableItemClicked(company));

    let tableItemInner = document.createElement('div');
    tableItemInner.className = 'table-item-inner';
    tableItemInner.classList.add(toAttr(company.Grupo));

    let shortTitle = document.createElement('div');
    shortTitle.className = 'short-title';
    shortTitle.innerHTML = company.Abreviacao;

    let title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = company.Nome;

    tableItem.appendChild(tableItemInner);
    tableItemInner.appendChild(shortTitle);
    tableItemInner.appendChild(title);

    return tableItem;
}

/** Returns an HTML element of the legend item. */
function createLegendItem(group) {
    let legendItem = document.createElement('div');
    legendItem.className = 'legend-item';

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = toAttr(group);
    checkbox.addEventListener('click', (e) => onLegendItemClicked(e.target));

    let marker = document.createElement('div');
    marker.className = 'legend-item-marker';
    let markerColor = document.querySelector('.' + toAttr(group)).parentElement.style.color;
    marker.style.backgroundColor = markerColor;

    let label = document.createElement('label');
    label.htmlFor = toAttr(group);
    label.innerHTML = group;

    legendItem.appendChild(checkbox);
    legendItem.appendChild(marker);
    legendItem.appendChild(label);

    return legendItem;
}

/** Handles table item click. */
function onTableItemClicked(company) {
    title = document.querySelector('.modal-title');
    title.style.color = company.Cor;
    title.innerHTML = company.Nome;

    let group = document.querySelector('.modal-group');
    group.style.color = company.Cor;
    group.innerHTML = company.Grupo;

    document.querySelector('.modal-description').innerHTML = company.Descricao;
    document.querySelector('.modal').style.display = 'flex';
}

/** Handles legend item click. */
function onLegendItemClicked(legendItem) {
    let tableItems = document.getElementsByClassName(legendItem.id);

    if (legendItem.checked) {
        legendItem.parentElement.classList.add('selected');
        for (const item of tableItems) {
            item.classList.add('highlight');
        }
    } else {
        legendItem.parentElement.classList.remove('selected');
        for (const item of tableItems) {
            item.classList.remove('highlight');
        }
    }
}

/** Renders HTML elements created by given function inside a root element. */
function render(iterable, rootElementId, createHTMLElement) {
    const rootElement = document.getElementById(rootElementId);
    rootElement.innerHTML = '';
    for (const item of iterable) {
        rootElement.appendChild(createHTMLElement(item));
    }
}

/** Returns string formatted as attribute (with dashes and lowercase). */
function toAttr(string) {
    return string.replaceAll(' ', '-').toLowerCase();
}

/** Sets event listeners for closing modal. */
function setEventListeners() {
    window.addEventListener('click', (e) => closeModal(e));
    document.addEventListener('keydown', (e) => closeModal(e));
}

function closeModal(e) {
    const target = e.target.className;
    if (target === 'modal' || target === 'modal-close' || e.key === 'Escape') {
        document.querySelector('.modal').style.display = 'none';
    }
}

function getData() {
    return [
        {
            "Abreviacao": "Li",
            "Coluna": 1,
            "Cor": "#CBC634",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Social Media",
            "Linha": 1,
            "Nome": "Linkedin"
        },
        {
            "Abreviacao": "Fb",
            "Coluna": 2,
            "Cor": "#CBC634",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Social Media",
            "Linha": 1,
            "Nome": "Facebook"
        },
        {
            "Abreviacao": "Db",
            "Coluna": 7,
            "Cor": "#5A88E5",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Personal Development",
            "Linha": 1,
            "Nome": "Dribbble"
        },
        {
            "Abreviacao": "Ct",
            "Coluna": 8,
            "Cor": "#58AC30",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Serious Work",
            "Linha": 1,
            "Nome": "Commits"
        },
        {
            "Abreviacao": "Sl",
            "Coluna": 9,
            "Cor": "#58AC30",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Serious Work",
            "Linha": 1,
            "Nome": "Slack"
        },
        {
            "Abreviacao": "Wk",
            "Coluna": 1,
            "Cor": "#FF616D",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Fun Stuff",
            "Linha": 2,
            "Nome": "Wikipedia"
        },
        {
            "Abreviacao": "Sp",
            "Coluna": 2,
            "Cor": "#FF616D",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Fun Stuff",
            "Linha": 2,
            "Nome": "Spotify"
        },
        {
            "Abreviacao": "Tw",
            "Coluna": 3,
            "Cor": "#CBC634",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Social Media",
            "Linha": 2,
            "Nome": "Twitter"
        },
        {
            "Abreviacao": "Tc",
            "Coluna": 4,
            "Cor": "#CBC634",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Social Media",
            "Linha": 2,
            "Nome": "Twitch"
        },
        {
            "Abreviacao": "Gt",
            "Coluna": 5,
            "Cor": "#58AC30",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Serious Work",
            "Linha": 2,
            "Nome": "Github"
        },
        {
            "Abreviacao": "Yn",
            "Coluna": 6,
            "Cor": "#58AC30",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Serious Work",
            "Linha": 2,
            "Nome": "Yarn"
        },
        {
            "Abreviacao": "ll",
            "Coluna": 7,
            "Cor": "#5A88E5",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Personal Development",
            "Linha": 2,
            "Nome": "Ilustratin"
        },
        {
            "Abreviacao": "Te",
            "Coluna": 8,
            "Cor": "#5A88E5",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Personal Development",
            "Linha": 2,
            "Nome": "TellyStat"
        },
        {
            "Abreviacao": "Wu",
            "Coluna": 9,
            "Cor": "#5A88E5",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Personal Development",
            "Linha": 2,
            "Nome": "Wunderlis"
        },
        {
            "Abreviacao": "Cv",
            "Coluna": 1,
            "Cor": "#FF616D",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Fun Stuff",
            "Linha": 3,
            "Nome": "Cooking"
        },
        {
            "Abreviacao": "Dg",
            "Coluna": 2,
            "Cor": "#FF616D",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Fun Stuff",
            "Linha": 3,
            "Nome": "Dog Gifs"
        },
        {
            "Abreviacao": "Tg",
            "Coluna": 3,
            "Cor": "#FF616D",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Fun Stuff",
            "Linha": 3,
            "Nome": "Toggl Blo"
        },
        {
            "Abreviacao": "Gg",
            "Coluna": 4,
            "Cor": "#5A88E5",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Personal Development",
            "Linha": 3,
            "Nome": "Google"
        },
        {
            "Abreviacao": "Ex",
            "Coluna": 5,
            "Cor": "#5A88E5",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Personal Development",
            "Linha": 3,
            "Nome": "Excel"
        },
        {
            "Abreviacao": "So",
            "Coluna": 6,
            "Cor": "#58AC30",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Serious Work",
            "Linha": 3,
            "Nome": "StackOv."
        },
        {
            "Abreviacao": "Cd",
            "Coluna": 7,
            "Cor": "#58AC30",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Serious Work",
            "Linha": 3,
            "Nome": "Coding"
        },
        {
            "Abreviacao": "Cp",
            "Coluna": 8,
            "Cor": "#5A88E5",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Personal Development",
            "Linha": 3,
            "Nome": "Codepen"
        },
        {
            "Abreviacao": "Tr",
            "Coluna": 9,
            "Cor": "#5A88E5",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Personal Development",
            "Linha": 3,
            "Nome": "Travel"
        },
        {
            "Abreviacao": "In",
            "Coluna": 2,
            "Cor": "#CBC634",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Social Media",
            "Linha": 4,
            "Nome": "Instagram"
        },
        {
            "Abreviacao": "Mu",
            "Coluna": 3,
            "Cor": "#FF616D",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Fun Stuff",
            "Linha": 4,
            "Nome": "Musicals"
        },
        {
            "Abreviacao": "Me",
            "Coluna": 4,
            "Cor": "#FF616D",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Fun Stuff",
            "Linha": 4,
            "Nome": "Memes"
        },
        {
            "Abreviacao": "No",
            "Coluna": 5,
            "Cor": "#CBC634",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Social Media",
            "Linha": 4,
            "Nome": "Notion"
        },
        {
            "Abreviacao": "Re",
            "Coluna": 6,
            "Cor": "#CBC634",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Social Media",
            "Linha": 4,
            "Nome": "Reddit"
        },
        {
            "Abreviacao": "Rd",
            "Coluna": 7,
            "Cor": "#CBC634",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Social Media",
            "Linha": 4,
            "Nome": "Research"
        },
        {
            "Abreviacao": "St",
            "Coluna": 8,
            "Cor": "#CBC634",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Social Media",
            "Linha": 4,
            "Nome": "Stats"
        },
        {
            "Abreviacao": "Ad",
            "Coluna": 9,
            "Cor": "#CBC634",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Social Media",
            "Linha": 4,
            "Nome": "Ads"
        },
        {
            "Abreviacao": "Dg",
            "Coluna": 1,
            "Cor": "#DDDAA7",
            "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
            "Grupo": "Teste",
            "Linha": 5,
            "Nome": "Dgs"
        }
    ]
}

main();