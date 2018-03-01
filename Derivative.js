class Term{
    constructor(constant,variable,exponent){
        this.exponent = exponent || undefined;
        this.constant = constant || undefined;
        this.variable = variable || undefined;
    }


    derivate() {
        if(this.variable == undefined){
            this.constant = 0;
        }
        this.constant *=this.exponent;
        this.exponent -= 1;
        if(this.exponent == 0){
            this.variable = 1;
        }
    }
}

module.exports = Term;