
var openFile = document.getElementById("open-file");
openFile.addEventListener("change", (event) => {
  const fileUpload = event.target.files;
  console.log(fileUpload);

  if (fileUpload.lenght == 0) {
    alert("Error: Seleccione un archivo");
    return;
  }

  var reader = new FileReader();
  reader.addEventListener("load", function (e) {
    var text = e.target.result;
    //var editor = getEditor();
    Fuente.setValue(text);
  });
  reader.readAsText(fileUpload[0]);
});

var Fuente = CodeMirror.fromTextArea(document.getElementById('Fuente'),{
    mode: "javascript",
    theme: "darcula",
    lineNumbers: true,
    autoCloseTags: true,
});
Fuente.setSize("770","400");
var Salida = CodeMirror.fromTextArea(document.getElementById('Salida'),{
    mode: null,
    theme: "dracula",
    lineNumbers: true,
    autoCloseTags: true,
    readOnly: true
});
Salida.setSize("770","400");

var Consola = CodeMirror.fromTextArea(document.getElementById('Consola'),{
    mode: null,
    theme: "isotope",
    lineNumbers: true,
    autoCloseTags: true,
    readOnly: true
});
Consola.setSize("1170","300");

function Compile(texto){
    Salida.setValue("");
    Salida.setValue(texto);
}
function Compile(texto){
    Salida.setValue("");
    treeData = [];
    var res = gramatica.parse(texto);
    var codigo = "";
    for(var e of res){
        codigo+=e+"\n";
    }
    if (document.getElementById("grafo")) {
        document.getElementById("grafo").remove();
    }
    Salida.setValue(codigo);
    generateTree([res.node]);
}

document.getElementById('BtnCompilar').onclick = function (){
    var Codigo = Fuente.getValue();
    Compile(Codigo);
}

function newNode(yy, state, ...nodes) {
    const parent = getNonTerminal(yy, state);
    const children = [];
    for (let node of nodes) {
        node.parent = node.parent ? node.parent : parent;
        if (node.parent == parent) {
            children.push(node);
        } else if (typeof node == 'string') {
            children.push({
                name: node,
                parent,
                children: []
            });
        } else {
            children.push({
                name: node.parent,
                parent,
                children: [node]
            });
        }
    }

    return {
        name: parent,
        parent: null,
        children
    }
}

function getNonTerminal(yy, state) {
    const simbolos = yy.parser.symbols_;
    const produccion = yy.parser.productions_[state];
    let nonTerminal = '';
    for (let sim in simbolos) {
        if (simbolos[sim] === produccion[0]) {
            nonTerminal = sim;
            break;
        }
    }
    return nonTerminal;
}

const templist = [];

function getTemp() {
    const temp = `t${templist.length}`;
    templist.push(temp);
    return temp;
}