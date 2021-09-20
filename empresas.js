const header = document.querySelector('header');
const section = document.querySelector('section');

var requestURL = 'empresas.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var empresas = request.response;
    populateHeader(empresas);
    showEmpresas(empresas);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['tituloProjeto'];
    
    header.appendChild(myH1);

    var myH5 = document.createElement('h5');
    myH5.textContent = jsonObj['fraseProjeto'];

    header.appendChild(myH5);
}

function showEmpresas(jsonObj) {
    var apps = jsonObj['Empresas'];

    for (var i = 0; i < apps.length; i++) {
        
        var myArticle = document.createElement('article');

        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
          
        myH2.textContent = apps[i].Abreviacao;
        myPara1.textContent = apps[i].Nome; 
        myPara2.textContent = apps[i].Descricao;
  
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2); 

        section.appendChild(myArticle);
    }
}