class Term{
    constructor(constant,variable,exponent){
        this.exponent = exponent || undefined;
        this.constant = constant || undefined;
        this.variable = variable || undefined;
    }


    Derivate() {
        this.constant *=this.exponent;
        this.exponent -= 1;
    }
}

module.exports = Term;