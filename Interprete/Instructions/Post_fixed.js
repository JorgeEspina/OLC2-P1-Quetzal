class Post_fixed extends Instruction{
  constructor(identifier, action, row, column){
    super(row, column);
    this.identifier = identifier;
    this.action = action;
    this.type = null;
  }

  execute(tree, table){
    var symbol = table.getSymbol(this.identifier);
    if (symbol === null){
      ErrorList.addError(new ErrorNode(this.row,this.column,new ErrorType(EnumErrorType.SEMANTIC),`La variable`+this.identifier+" no existe",ENVIRONMENT.NULL));
      return new Exception("Semantico", "La variable "+this.identifier+" no existe", this.row, this.column);
    }
    var value = 0;
    var previousValue = 0;
    if (symbol.getType() === Type.INT){
      previousValue = symbol.value;
      if(this.action === "++"){
        value = symbol.value + 1;
      }else{
        value = symbol.value - 1; 
      }     
      for(var i = 0; i <  TableReport.SymbolList.length; i++){
          if(TableReport.SymbolList[i].name === symbol.getId() && TableReport.SymbolList[i].line === symbol.getRow() && TableReport.SymbolList[i].column === symbol.getColumn()  ){
            TableReport.SymbolList[i].value = value;
          }
      }
    }else{
      ErrorList.addError(new ErrorNode(this.row,this.column,new ErrorType(EnumErrorType.SEMANTIC),"Solo se puede incrementar o decrementar variables de tipo INT",ENVIRONMENT.FOR));
      return new Exception("Semantico", "Solo se puede incrementar o decrementar variables de tipo INT", this.row, this.column);
    }
    symbol = new Symbol(symbol.getId(), symbol.getType(), value, symbol.getRow(), symbol.getColumn(), null, null);
    var res = table.updateValueSymbol(symbol);
    if (res instanceof Exception) return res;
    this.type = Type.INT;
    return previousValue;
  }

  compile(generator, env){
    var ident = new Identifier(this.identifier, this.row, this.column, ENVIRONMENT.NULL);
    var primitive = new Primitive(Type.INT, 1, this.row, this.column);
    var operation = this.action === "++" ? ARITMETIC_OPERATOR.SUM : ARITMETIC_OPERATOR.REST;
    var arm = new Aritmetica(ident, operation, primitive, this.row, this.column);
    var assign = new Assignation(this.identifier, arm, this.row, this.column);
    assign.compile(generator, env);
  }
}