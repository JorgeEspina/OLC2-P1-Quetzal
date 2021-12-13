class NodeTableSymbols {
    /**
     *
     * @param {*} line
     * @param {*} column
     * @param {*} name
     * @param {*} type
     * @param {*} typeEnviroment
     * @param {*} value
     */
    constructor(line, column, name, type, typeEnviroment, value) {
      this.line = line;
      this.column = column;
      this.name = name;
      this.type = type;
      this.typeEnviroment = typeEnviroment;
      this.value = value;
    }
  }
  
  class TableReport {
    
    static SymbolList = [];

    static cleanTableReport(){
        TableReport.SymbolList = [];
    }

    static addTableSymbol(node){
        TableReport.SymbolList.push(node);
    }

    static getTableReport(){
        return TableReport.SymbolList;
    }

    static isErrors(){
        if(TableReport.SymbolList.length === 0){
            return true;
        }else{
            return false;
        }
    }

    static showSymbol(){
        var item;
        for(var i = 0; i <  TableReport.SymbolList.length; i++){
            item = TableReport.SymbolList[i];
            //PrintConsole.printLine(`Error tipo: ${item.errorType} Linea: ${item.line} Columna: ${item.column} Descripcion: ${item.description} Entorno: ${item.enviroment}`);
        }
    }

  
  
  
  }
  