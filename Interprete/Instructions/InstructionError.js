class InstructionError extends Instruction {
    constructor(){
        super(0,0);
    }

    execute(e) {
        return null;
    }

    compile(generator, env){
        return null;
    }
}