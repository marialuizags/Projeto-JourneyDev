//create constants about el list
const elList = document.getElementById('el');
const elTitle = document.getElementById('elTitle');
const elButton = document.getElementById('elButton');

//set values to create click event about el list
const elInputQuantity = getInputQuantity(elList);
elTitle.innerHTML = 'Escolha uma linguagem - 0%';
elButton.disabled = true;
let elInputCont = 0;

//create click event
createClickEvent(elList, elTitle, elButton, 'Escolha uma linguagem', elInputCont, elInputQuantity);


//create constants about fundamentos list
const fundamentosList = document.getElementById('fundamentos');
const fundamentosTitle = document.getElementById('fundamentosTitle');
const fundamentosButton = document.getElementById('fundamentosButton');

//set values to create click event about fundamentos list
const fundamentosInputQuantity = getInputQuantity(fundamentosList);
fundamentosTitle.innerHTML = 'Os Fundamentos - 0%';
fundamentosButton.disabled = true;
let fundamentosInputCont = 0;

//create click event
createClickEvent(fundamentosList, fundamentosTitle, fundamentosButton, 'Os Fundamentos', fundamentosInputCont, fundamentosInputQuantity);


//create constants about scv list
const scvList = document.getElementById('scv');
const scvTitle = document.getElementById('scvTitle');
const scvButton = document.getElementById('scvButton');

//set values to create click event about scv list
const scvInputQuantity = getInputQuantity(scvList);
scvTitle.innerHTML = 'Sistemas de controle de versão - 0%';
scvButton.disabled = true;
let scvInputCont = 0;

//create click event
createClickEvent(scvList, scvTitle, scvButton, 'Sistemas de controle de versão', scvInputCont, scvInputQuantity);


//create constants about ca list
const caList = document.getElementById('ca');
const caTitle = document.getElementById('caTitle');
const caButton = document.getElementById('caButton');

//set values to create click event about ca list
const caInputQuantity = getInputQuantity(caList);
caTitle.innerHTML = 'Construa um aplicativo - 0%';
caButton.disabled = true;
let caInputCont = 0;

//create click event
createClickEvent(caList, caTitle, caButton, 'Construa um aplicativo', caInputCont, caInputQuantity);


//create constants about ear list
const earList = document.getElementById('ear');
const earTitle = document.getElementById('earTitle');
const earButton = document.getElementById('earButton');

//set values to create click event about ear list
const earInputQuantity = getInputQuantity(earList);
earTitle.innerHTML = 'Escrevendo aplicativos robustos - 0%';
earButton.disabled = true;
let earInputCont = 0;

//create click event
createClickEvent(earList, earTitle, earButton, 'Escrevendo aplicativos robustos', earInputCont, earInputQuantity);



function createClickEvent (element, elementTitle, elementButton, title, cont, quantity) {

  element.addEventListener('click', event => {

    if(event.srcElement.localName == 'input'){
      event.srcElement.checked == true ? cont++ : cont--;
    }

    var percent = ((cont/quantity)*100).toFixed(2);
    elementTitle.innerHTML = `${title} - ${percent}%`;

    if(percent >= 60) {
      elementButton.disabled = false;
    } else {
      elementButton.disabled = true;
    }
  })
}


function getInputQuantity (element) {
  let quantity = 0;

  for (i=0; i<element.children.length; i++) {
    element.children[i].localName == 'label' ? quantity++ : null;
  };

  return quantity;
};