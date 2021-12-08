class Continue extends Instruction {
    /**
     * 
     * @param {*} linea 
     * @param {*} column 
     */
    constructor(linea,column){
        super(linea,column);
        this.translatedCode = "";
    }

    getTranslated(){
        this.translatedCode = "continue;\n"
        return this.translatedCode;
    }

    translatedSymbolsTable(e){
        return"implementar";
    }

    executeSymbolsTable(e){
        return "implementar";
    }
    
    execute(e) {

        for(var env = e; env != null; env = env.previous){
            if(env.enviromentType.enumEnvironmentType == EnumEnvironmentType.FOR
                || env.enviromentType.enumEnvironmentType == EnumEnvironmentType.FOR_IN
                || env.enviromentType.enumEnvironmentType == EnumEnvironmentType.SWITCH
                || env.enviromentType.enumEnvironmentType == EnumEnvironmentType.WHILE
                || env.enviromentType.enumEnvironmentType == EnumEnvironmentType.DO
                || env.enviromentType.enumEnvironmentType == EnumEnvironmentType.IF){
                    return this;
                }
        }
        ErrorList.addError(new ErrorNode(this.line,this.column,new ErrorType(EnumErrorType.SEMANTIC),`Continue debe de estar dentro de una sentencia de control`,e.enviromentType));
        return null;
    }

}