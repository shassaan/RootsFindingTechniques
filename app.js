var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Term = require('./Derivative');
app.listen(5000, listening);

function listening() {
    console.log("SERver is runnng......");
}

app.get('/', (req, res, next) => {
    let rootByBisection, rootByNewton, rootBySecant, rootByRegulaFalsi;
    rootByNewton = findRootByNewton();
    rootByBisection = findRootByBisection();
    rootBySecant = findRootBySecant();
    rootByRegulaFalsi = findRootByRegulaFalsi();
    console.log("Root By Bisection is ", rootByBisection);
    console.log("Root By Newton is ", rootByNewton);
    console.log("Root By Secant is ", rootBySecant);
    console.log("Root By Regula Falsi is ", rootByRegulaFalsi);


    console.log("Function Response By Bisection is ", funX(rootByBisection));
    console.log("Function Response By Newton is ", funX(rootByNewton));
    console.log("Function Response By By Secant is ", funX(rootBySecant));
    console.log("Function Response By Regula Falsi is ", funX(rootByRegulaFalsi));
});

function funX(x) {//sample function
    //function of which you want to find root hahah
    let term1 = new Term(4,x,3);
    let term2 = new Term(4,x,2);
    let term3 = new Term(2,x,1);
    let term4 = new Term(2);
     

    return 4*(x * x * x)+4*(x * x)+2*x+2;
    //return 1*(x * x * x) + 1*(x * x) - 3*(x * 1) - 3;

    //return Math.sin(x)-5*x+2;
}

function bisect(x, y) {
    return (x + y) / 2;
}

function findRootByBisection() {
    let n = 0;
    let x = 1, y = 2;
    let funX1 = 0;
    z = bisect(x, y);
    funX1 = funX(z);
    while (funX1 <= 0.0001) {
        n++;
        if (funX1 < 0) {
            x = z;
        } else {
            y = z;
        }
        z = bisect(x, y);
        funX1 = funX(z);
        //console.log(funX1);
    }

    return z;

}

function secant(x, y) {
    console.log("in secant");
    let numerator = (x * funX(y)) - (y * funX(x));
    let denominator = funX(y) - funX(x);
    console.log("calculated");
    return numerator / denominator;
}

function findRootBySecant() {
    let x = 0.4, y = 0.6, repX = 0, n = 0;
    while (n < 10) {
        x = secant(x, y);
        if (repX == x) {
            break;
        }
        repX = x;
        n++;
    }
    return x;
}

function funX_(x){
    let term1 = new Term(12,x,2);
    let term2 = new Term(8,x,1);
    //let term3 = new Term(2,x,1);
    let term4 = new Term(2);

    // term1.derivate();
    // term2.derivate();
    // term3.derivate();
    // term4.derivate();

    return 12*(x*x)+8*x+2;




}

function regulaFalsi(x, y) {
    let numerator = (x * funX(y)) - (y * funX(x));
    let denominator = funX(y) - funX(x);
    return numerator / denominator;
}

function findRootByRegulaFalsi() {
    let n = 0;
    let x = 0.4, y = 0.6;
    let funX1 = 0;
    z = regulaFalsi(x, y);
    funX1 = funX(z);
    while (funX1 <= 0.0001) {
        n++;
        if (funX1 < 0) {
            x = z;
        } else {
            y = z;
        }
        z = regulaFalsi(x, y);
        funX1 = funX(z);
        //console.log(funX1);
    }
    return z;

}

function newton(x){
    return x - (funX(x)/funX_(x));
}

function findRootByNewton(){
    let x = 1;
    let n = 0;

    while (n<8){
        x = newton(x);
        n++;
    }

    return x;
}







