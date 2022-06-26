//create constants about internet list
const internetList = document.getElementById('internet');
const internetTitle = document.getElementById('internetTitle');
const internetButton = document.getElementById('internetButton');

//set values to create click event about internet list
const internetInputQuantity = getInputQuantity(internetList);
internetTitle.innerHTML = 'INTERNET - 0%';
internetButton.disabled = true;
let internetInputCont = 0;

//create click event
createClickEvent(internetList, internetTitle, internetButton, 'INTERNET', internetInputCont, internetInputQuantity);


//create constants about html list
const htmlList = document.getElementById('html');
const htmlTitle = document.getElementById('htmlTitle');
const htmlButton = document.getElementById('htmlButton');

//set values to create click event about html list
const htmlInputQuantity = getInputQuantity(htmlList);
htmlTitle.innerHTML = 'HTML - 0%';
htmlButton.disabled = true;
let htmlInputCont = 0;

//create click event
createClickEvent(htmlList, htmlTitle, htmlButton, 'HTML', htmlInputCont, htmlInputQuantity);


//create constants about css list
const cssList = document.getElementById('css');
const cssTitle = document.getElementById('cssTitle');
const cssButton = document.getElementById('cssButton');

//set values to create click event about css list
const cssInputQuantity = getInputQuantity(cssList);
cssTitle.innerHTML = 'CSS - 0%';
cssButton.disabled = true;
let cssInputCont = 0;

//create click event
createClickEvent(cssList, cssTitle, cssButton, 'CSS', cssInputCont, cssInputQuantity);


//create constants about javascript list
const javascriptList = document.getElementById('javascript');
const javascriptTitle = document.getElementById('javascriptTitle');
const javascriptButton = document.getElementById('javascriptButton');

//set values to create click event about javascript list
const javascriptInputQuantity = getInputQuantity(javascriptList);
javascriptTitle.innerHTML = 'JavaScript - 0%';
javascriptButton.disabled = true;
let javascriptInputCont = 0;

//create click event
createClickEvent(javascriptList, javascriptTitle, javascriptButton, 'JavaScript', javascriptInputCont, javascriptInputQuantity);


//create constants about so list
const soList = document.getElementById('so');
const soTitle = document.getElementById('soTitle');
const soButton = document.getElementById('soButton');

//set values to create click event about so list
const soInputQuantity = getInputQuantity(soList);
soTitle.innerHTML = 'Sistema Operacional e Conhecimentos Gerais - 0%';
soButton.disabled = true;
let soInputCont = 0;

//create click event
createClickEvent(soList, soTitle, soButton, 'Sistema Operacional e Conhecimentos Gerais', soInputCont, soInputQuantity);


//create constants about lgn list
const lgnList = document.getElementById('lgn');
const lgnTitle = document.getElementById('lgnTitle');
const lgnButton = document.getElementById('lgnButton');

//set values to create click event about lgn list
const lgnInputQuantity = getInputQuantity(lgnList);
lgnTitle.innerHTML = 'Aprenda uma linguagem - 0%';
lgnButton.disabled = true;
let lgnInputCont = 0;

//create click event
createClickEvent(lgnList, lgnTitle, lgnButton, 'Aprenda uma linguagem', lgnInputCont, lgnInputQuantity);


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


//create constants about dbn list
const dbList = document.getElementById('db');
const dbTitle = document.getElementById('dbTitle');
const dbButton = document.getElementById('dbButton');

//set values to create click event about db list
const dbInputQuantity = getInputQuantity(dbList);
dbTitle.innerHTML = 'Bancos de dados relacionais - 0%';
dbButton.disabled = true;
let dbInputCont = 0;

//create click event
createClickEvent(dbList, dbTitle, dbButton, 'Bancos de dados relacionais', dbInputCont, dbInputQuantity);


//create constants about dbn list
const dbnList = document.getElementById('dbn');
const dbnTitle = document.getElementById('dbnTitle');
const dbnButton = document.getElementById('dbnButton');

//set values to create click event about dbn list
const dbnInputQuantity = getInputQuantity(dbnList);
dbnTitle.innerHTML = 'Banco de dados NoSQL - 0%';
dbnButton.disabled = true;
let dbnInputCont = 0;

//create click event
createClickEvent(dbnList, dbnTitle, dbnButton, 'Banco de dados NoSQL', dbnInputCont, dbnInputQuantity);


//create constants about mdb list
const mdbList = document.getElementById('mdb');
const mdbTitle = document.getElementById('mdbTitle');
const mdbButton = document.getElementById('mdbButton');

//set values to create click event about mdb list
const mdbInputQuantity = getInputQuantity(mdbList);
mdbTitle.innerHTML = 'Mais sobre Banco de Dados - 0%';
mdbButton.disabled = true;
let mdbInputCont = 0;

//create click event
createClickEvent(mdbList, mdbTitle, mdbButton, 'Mais sobre Banco de Dados', mdbInputCont, mdbInputQuantity);


//create constants about aapi list
const aapiList = document.getElementById('aapi');
const aapiTitle = document.getElementById('aapiTitle');
const aapiButton = document.getElementById('aapiButton');

//set values to create click event about aapi list
const aapiInputQuantity = getInputQuantity(aapiList);
aapiTitle.innerHTML = 'Aprenda sobre APIs - 0%';
aapiButton.disabled = true;
let aapiInputCont = 0;

//create click event
createClickEvent(aapiList, aapiTitle, aapiButton, 'Aprenda sobre APIs', aapiInputCont, aapiInputQuantity);


//create constants about cache list
const cacheList = document.getElementById('cache');
const cacheTitle = document.getElementById('cacheTitle');
const cacheButton = document.getElementById('cacheButton');

//set values to create click event about cache list
const cacheInputQuantity = getInputQuantity(cacheList);
cacheTitle.innerHTML = 'Cachê - 0%';
cacheButton.disabled = true;
let cacheInputCont = 0;

//create click event
createClickEvent(cacheList, cacheTitle, cacheButton, 'Cachê', cacheInputCont, cacheInputQuantity);


//create constants about csw list
const cswList = document.getElementById('csw');
const cswTitle = document.getElementById('cswTitle');
const cswButton = document.getElementById('cswButton');

//set values to create click event about csw list
const cswInputQuantity = getInputQuantity(cswList);
cswTitle.innerHTML = 'Conhecimento de Segurança na Web - 0%';
cswButton.disabled = true;
let cswInputCont = 0;

//create click event
createClickEvent(cswList, cswTitle, cswButton, 'Conhecimento de Segurança na Web', cswInputCont, cswInputQuantity);


//create constants about teste list
const testeList = document.getElementById('teste');
const testeTitle = document.getElementById('testeTitle');
const testeButton = document.getElementById('testeButton');

//set values to create click event about teste list
const testeInputQuantity = getInputQuantity(testeList);
testeTitle.innerHTML = 'Teste - 0%';
testeButton.disabled = true;
let testeInputCont = 0;

//create click event
createClickEvent(testeList, testeTitle, testeButton, 'Teste', testeInputCont, testeInputQuantity);


//create constants about pdd list
const pddList = document.getElementById('pdd');
const pddTitle = document.getElementById('pddTitle');
const pddButton = document.getElementById('pddButton');

//set values to create click event about pdd list
const pddInputQuantity = getInputQuantity(pddList);
pddTitle.innerHTML = 'Princípios de design e desenvolvimento - 0%';
pddButton.disabled = true;
let pddInputCont = 0;

//create click event
createClickEvent(pddList, pddTitle, pddButton, 'Princípios de design e desenvolvimento', pddInputCont, pddInputQuantity);


//create constants about pa list
const paList = document.getElementById('pa');
const paTitle = document.getElementById('paTitle');
const paButton = document.getElementById('paButton');

//set values to create click event about pa list
const paInputQuantity = getInputQuantity(paList);
paTitle.innerHTML = 'Padrões de arquitetura - 0%';
paButton.disabled = true;
let paInputCont = 0;

//create click event
createClickEvent(paList, paTitle, paButton, 'Padrões de arquitetura', paInputCont, paInputQuantity);


//create constants about mb list
const mbList = document.getElementById('mb');
const mbTitle = document.getElementById('mbTitle');
const mbButton = document.getElementById('mbButton');

//set values to create click event about mb list
const mbInputQuantity = getInputQuantity(mbList);
mbTitle.innerHTML = 'Motores de Busca - 0%';
mbButton.disabled = true;
let mbInputCont = 0;

//create click event
createClickEvent(mbList, mbTitle, mbButton, 'Motores de Busca', mbInputCont, mbInputQuantity);


//create constants about docker list
const dockerList = document.getElementById('docker');
const dockerTitle = document.getElementById('dockerTitle');
const dockerButton = document.getElementById('dockerButton');

//set values to create click event about docker list
const dockerInputQuantity = getInputQuantity(dockerList);
dockerTitle.innerHTML = 'Conteinerização vs Virtualização - 0%';
dockerButton.disabled = true;
let dockerInputCont = 0;

//create click event
createClickEvent(dockerList, dockerTitle, dockerButton, 'Conteinerização vs Virtualização', dockerInputCont, dockerInputQuantity);


//create constants about graphql list
const graphqlList = document.getElementById('graphql');
const graphqlTitle = document.getElementById('graphqlTitle');
const graphqlButton = document.getElementById('graphqlButton');

//set values to create click event about graphql list
const graphqlInputQuantity = getInputQuantity(graphqlList);
graphqlTitle.innerHTML = 'GraphQL - 0%';
graphqlButton.disabled = true;
let graphqlInputCont = 0;

//create click event
createClickEvent(graphqlList, graphqlTitle, graphqlButton, 'GraphQL', graphqlInputCont, graphqlInputQuantity);


//create constants about sweb list
const swebList = document.getElementById('sweb');
const swebTitle = document.getElementById('swebTitle');
const swebButton = document.getElementById('swebButton');

//set values to create click event about sweb list
const swebInputQuantity = getInputQuantity(swebList);
swebTitle.innerHTML = 'Servidores da web - 0%';
swebButton.disabled = true;
let swebInputCont = 0;

//create click event
createClickEvent(swebList, swebTitle, swebButton, 'Servidores da web', swebInputCont, swebInputQuantity);


//create constants about esc list
const escList = document.getElementById('esc');
const escTitle = document.getElementById('escTitle');
const escButton = document.getElementById('escButton');

//set values to create click event about esc list
const escInputQuantity = getInputQuantity(escList);
escTitle.innerHTML = 'Escalabilidade - 0%';
escButton.disabled = true;
let escInputCont = 0;

//create click event
createClickEvent(escList, escTitle, escButton, 'Escalabilidade', escInputCont, escInputQuantity);



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