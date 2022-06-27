let themeToggler = document.getElementById("theme-toggler");

let modeDarkTheme = localStorage.getItem("theme");

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
  const url_file = "../assets/enterprise.json";

  fetch(url_file)
    .then((response) => response.json())
    .then((dados) => {
      const companies = dados.Enterprise;
      renderTable(companies);

      const groups = [...new Set(companies.map((c) => c.Grupo))];
      renderLegend(groups);
      setEventListeners();
    });
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

main();
