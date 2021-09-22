const header = document.querySelector('header');
const section = document.querySelector('div.periodic-table');

var requestURL = 'empresas.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var empresas = request.response;
    savedTheme();
    populateHeader(empresas);
    showEmpresas(empresas); 
}

function savedTheme(){
    let savedTheme = localStorage.getItem("theme"); 
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    }
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
        if(apps[i].Grupo == "Social Media"){
            var myElement = document.createElement('div');
            myElement.className = 'periodic-element social-media';
            myElement.setAttribute("dataDescription", apps[i].Explicacao);      
        } else if(apps[i].Grupo == "Personal Development"){
            var myElement = document.createElement('div');
            myElement.className = 'periodic-element just-trying'; 
            myElement.setAttribute("dataDescription", apps[i].Explicacao);  
        } else if(apps[i].Grupo == "Serious Work"){
            var myElement = document.createElement('div');
            myElement.className = 'periodic-element intense-work'; 
            myElement.setAttribute("dataDescription", apps[i].Explicacao);  
        } else if(apps[i].Grupo == "Fun Stuff"){
            var myElement = document.createElement('div');
            myElement.className = 'periodic-element fun-stuff'; 
            myElement.setAttribute("dataDescription", apps[i].Explicacao);  
        }else if(apps[i].Grupo == "EmptySpacer1"){
            var myElement = document.createElement('div');
            myElement.className = 'empty-spacer-1';  
            myElement.setAttribute("dataDescription", apps[i].Explicacao); 
        }else if(apps[i].Grupo == "EmptySpacer2"){
            var myElement = document.createElement('div');
            myElement.className = 'empty-spacer-2';  
            myElement.setAttribute("dataDescription", apps[i].Explicacao); 
        }
 
 
            var myAction = document.createElement('a'); 
            myAction.href = "#open-modal"; 

                var myBox = document.createElement('div');
                myBox.className = 'periodic-element-inner'; 

                    var myAbrev = document.createElement('div');
                    myAbrev.className = 'title'; 

                    var myNome = document.createElement('div');
                    myNome.className = 'description'; 
          
                    myAbrev.textContent = apps[i].Abreviacao;
                    myNome.textContent = apps[i].Nome;  
  
                myBox.appendChild(myAbrev);
                myBox.appendChild(myNome); 
            
            myAction.appendChild(myBox);
        
        myElement.appendChild(myAction);
  
        section.appendChild(myElement);  

    }  

}  
 

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
 

let socialMedia = document.getElementById("social-media-check");

socialMedia.addEventListener("click", () => {

    let targetLegend;
    let currentLegend = document.documentElement.getAttribute("data-legend"); 

    if (currentLegend === "toCheck") {
        targetLegend = "checked";
    } else {
        targetLegend = "toCheck";
    } 

    document.documentElement.setAttribute("data-legend", targetLegend);

})

let intenseWork = document.getElementById("intense-work-check");

intenseWork.addEventListener("click", () => {

    let targetLegend;
    let currentLegend = document.documentElement.getAttribute("data-legend"); 

    if (currentLegend === "toCheck") {
        targetLegend = "checked";
    } else {
        targetLegend = "toCheck";
    } 

    document.documentElement.setAttribute("data-legend", targetLegend);

})

let justTrying = document.getElementById("just-trying-check");

justTrying.addEventListener("click", () => {

    let targetLegend;
    let currentLegend = document.documentElement.getAttribute("data-legend"); 

    if (currentLegend === "toCheck") {
        targetLegend = "checked";
    } else {
        targetLegend = "toCheck";
    } 

    document.documentElement.setAttribute("data-legend", targetLegend);

})
    
let funStuff = document.getElementById("fun-stuff-check");

funStuff.addEventListener("click", () => {

    let targetLegend;
    let currentLegend = document.documentElement.getAttribute("data-legend"); 

    if (currentLegend === "toCheck") {
        targetLegend = "checked";
    } else {
        targetLegend = "toCheck";
    } 

    document.documentElement.setAttribute("data-legend", targetLegend);

})