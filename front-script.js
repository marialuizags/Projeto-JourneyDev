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


//create constants about shr list
const shrList = document.getElementById('shr');
const shrTitle = document.getElementById('shrTitle');
const shrButton = document.getElementById('shrButton');

//set values to create click event about shr list
const shrInputQuantity = getInputQuantity(shrList);
shrTitle.innerHTML = 'Serviços de hospedagem de repositório - 0%';
shrButton.disabled = true;
let shrInputCont = 0;

//create click event
createClickEvent(shrList, shrTitle, shrButton, 'Serviços de hospedagem de repositório', shrInputCont, shrInputQuantity);



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


//create constants about gp list
const gpList = document.getElementById('gp');
const gpTitle = document.getElementById('gpTitle');
const gpButton = document.getElementById('gpButton');

//set values to create click event about gp list
const gpInputQuantity = getInputQuantity(gpList);
gpTitle.innerHTML = 'Gerenciadores de Pacotes - 0%';
gpButton.disabled = true;
let gpInputCont = 0;

//create click event
createClickEvent(gpList, gpTitle, gpButton, 'Gerenciadores de Pacotes', gpInputCont, gpInputQuantity);


//create constants about acss list
const acssList = document.getElementById('acss');
const acssTitle = document.getElementById('acssTitle');
const acssButton = document.getElementById('acssButton');

//set values to create click event about acss list
const acssInputQuantity = getInputQuantity(acssList);
acssTitle.innerHTML = 'Arquitetura CSS - 0%';
acssButton.disabled = true;
let acssInputCont = 0;

//create click event
createClickEvent(acssList, acssTitle, acssButton, 'Arquitetura CSS', acssInputCont, acssInputQuantity);


//create constants about ppdcss list
const ppdcssList = document.getElementById('ppdcss');
const ppdcssTitle = document.getElementById('ppdcssTitle');
const ppdcssButton = document.getElementById('ppdcssButton');

//set values to create click event about ppdcss list
const ppdcssInputQuantity = getInputQuantity(ppdcssList);
ppdcssTitle.innerHTML = 'Pré-processadores de CSS - 0%';
ppdcssButton.disabled = true;
let ppdcssInputCont = 0;

//create click event
createClickEvent(ppdcssList, ppdcssTitle, ppdcssButton, 'Pré-processadores de CSS', ppdcssInputCont, ppdcssInputQuantity);


//create constants about fc list
const fcList = document.getElementById('fc');
const fcTitle = document.getElementById('fcTitle');
const fcButton = document.getElementById('fcButton');

//set values to create click event about fc list
const fcInputQuantity = getInputQuantity(fcList);
fcTitle.innerHTML = 'Ferramentas de construção - 0%';
fcButton.disabled = true;
let fcInputCont = 0;

//create click event
createClickEvent(fcList, fcTitle, fcButton, 'Ferramentas de construção', fcInputCont, fcInputQuantity);


//create constants about ef list
const efList = document.getElementById('ef');
const efTitle = document.getElementById('efTitle');
const efButton = document.getElementById('efButton');

//set values to create click event about ef list
const efInputQuantity = getInputQuantity(efList);
efTitle.innerHTML = 'Escolha um Framework - 0%';
efButton.disabled = true;
let efInputCont = 0;

//create click event
createClickEvent(efList, efTitle, efButton, 'Escolha um Framework', efInputCont, efInputQuantity);


//create constants about cssModerno list
const cssModernoList = document.getElementById('cssModerno');
const cssModernoTitle = document.getElementById('cssModernoTitle');
const cssModernoButton = document.getElementById('cssModernoButton');

//set values to create click event about cssModerno list
const cssModernoInputQuantity = getInputQuantity(cssModernoList);
cssModernoTitle.innerHTML = 'CSS Moderno - 0%';
cssModernoButton.disabled = true;
let cssModernoInputCont = 0;

//create click event
createClickEvent(cssModernoList, cssModernoTitle, cssModernoButton, 'CSS Moderno', cssModernoInputCont, cssModernoInputQuantity);


//create constants about cw list
const cwList = document.getElementById('cw');
const cwTitle = document.getElementById('cwTitle');
const cwButton = document.getElementById('cwButton');

//set values to create click event about cw list
const cwInputQuantity = getInputQuantity(cwList);
cwTitle.innerHTML = 'Componentes da Web - 0%';
cwButton.disabled = true;
let cwInputCont = 0;

//create click event
createClickEvent(cwList, cwTitle, cwButton, 'Componentes da Web', cwInputCont, cwInputQuantity);


//create constants about cssFrame list
const cssFrameList = document.getElementById('cssFrame');
const cssFrameTitle = document.getElementById('cssFrameTitle');
const cssFrameButton = document.getElementById('cssFrameButton');

//set values to create click event about cssFrame list
const cssFrameInputQuantity = getInputQuantity(cssFrameList);
cssFrameTitle.innerHTML = 'CSS Frameworks - 0%';
cssFrameButton.disabled = true;
let cssFrameInputCont = 0;

//create click event
createClickEvent(cssFrameList, cssFrameTitle, cssFrameButton, 'CSS Frameworks', cssFrameInputCont, cssFrameInputQuantity);


//create constants about tsa list
const tsaList = document.getElementById('tsa');
const tsaTitle = document.getElementById('tsaTitle');
const tsaButton = document.getElementById('tsaButton');

//set values to create click event about tsa list
const tsaInputQuantity = getInputQuantity(tsaList);
tsaTitle.innerHTML = 'Testando seus aplicativos - 0%';
tsaButton.disabled = true;
let tsaInputCont = 0;

//create click event
createClickEvent(tsaList, tsaTitle, tsaButton, 'Testando seus aplicativos', tsaInputCont, tsaInputQuantity);


//create constants about vdt list
const vdtList = document.getElementById('vdt');
const vdtTitle = document.getElementById('vdtTitle');
const vdtButton = document.getElementById('vdtButton');

//set values to create click event about vdt list
const vdtInputQuantity = getInputQuantity(vdtList);
vdtTitle.innerHTML = 'Verificadores de tipo - 0%';
vdtButton.disabled = true;
let vdtInputCont = 0;

//create click event
createClickEvent(vdtList, vdtTitle, vdtButton, 'Verificadores de tipo', vdtInputCont, vdtInputQuantity);


//create constants about pwa list
const pwaList = document.getElementById('pwa');
const pwaTitle = document.getElementById('pwaTitle');
const pwaButton = document.getElementById('pwaButton');

//set values to create click event about pwa list
const pwaInputQuantity = getInputQuantity(pwaList);
pwaTitle.innerHTML = 'Aplicativos da Web (PWAs) - 0%';
pwaButton.disabled = true;
let pwaInputCont = 0;

//create click event
createClickEvent(pwaList, pwaTitle, pwaButton, 'Aplicativos da Web (PWAs)', pwaInputCont, pwaInputQuantity);


//create constants about ssr list
const ssrList = document.getElementById('ssr');
const ssrTitle = document.getElementById('ssrTitle');
const ssrButton = document.getElementById('ssrButton');

//set values to create click event about ssr list
const ssrInputQuantity = getInputQuantity(ssrList);
ssrTitle.innerHTML = 'Renderização do lado do servidor (SSR) - 0%';
ssrButton.disabled = true;
let ssrInputCont = 0;

//create click event
createClickEvent(ssrList, ssrTitle, ssrButton, 'Renderização do lado do servidor (SSR)', ssrInputCont, ssrInputQuantity);


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


//create constants about gse list
const gseList = document.getElementById('gse');
const gseTitle = document.getElementById('gseTitle');
const gseButton = document.getElementById('gseButton');

//set values to create click event about gse list
const gseInputQuantity = getInputQuantity(gseList);
gseTitle.innerHTML = 'Geradores de sites estáticos - 0%';
gseButton.disabled = true;
let gseInputCont = 0;

//create click event
createClickEvent(gseList, gseTitle, gseButton, 'Geradores de sites estáticos', gseInputCont, gseInputQuantity);


//create constants about appMoveis list
const appMoveisList = document.getElementById('appMoveis');
const appMoveisTitle = document.getElementById('appMoveisTitle');
const appMoveisButton = document.getElementById('appMoveisButton');

//set values to create click event about appMoveis list
const appMoveisInputQuantity = getInputQuantity(appMoveisList);
appMoveisTitle.innerHTML = 'Aplicações Móveis - 0%';
appMoveisButton.disabled = true;
let appMoveisInputCont = 0;

//create click event
createClickEvent(appMoveisList, appMoveisTitle, appMoveisButton, 'Aplicações Móveis', appMoveisInputCont, appMoveisInputQuantity);


//create constants about appDesktop list
const appDesktopList = document.getElementById('appDesktop');
const appDesktopTitle = document.getElementById('appDesktopTitle');
const appDesktopButton = document.getElementById('appDesktopButton');

//set values to create click event about appDesktop list
const appDesktopInputQuantity = getInputQuantity(appDesktopList);
appDesktopTitle.innerHTML = 'Aplicações Desktop - 0%';
appDesktopButton.disabled = true;
let appDesktopInputCont = 0;

//create click event
createClickEvent(appDesktopList, appDesktopTitle, appDesktopButton, 'Aplicações Desktop', appDesktopInputCont, appDesktopInputQuantity);


//create constants about wasm list
const wasmList = document.getElementById('wasm');
const wasmTitle = document.getElementById('wasmTitle');
const wasmButton = document.getElementById('wasmButton');

//set values to create click event about wasm list
const wasmInputQuantity = getInputQuantity(wasmList);
wasmTitle.innerHTML = 'Web Assembly (WASM) - 0%';
wasmButton.disabled = true;
let wasmInputCont = 0;

//create click event
createClickEvent(wasmList, wasmTitle, wasmButton, 'Web Assembly (WASM)', wasmInputCont, wasmInputQuantity);


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