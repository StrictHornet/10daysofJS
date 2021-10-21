//
//
// var v1, v2, res;
// var ops = "";
var eqn = "";
var val = "";
var v1, v2, sn = "";



function clickClr(){
    eqn = "";
    document.querySelector("#res").innerHTML = eqn;
}

function clickOne(){
    eqn += "1";
    document.querySelector("#res").innerHTML = eqn;
    val += "1";
}

function clickZero(){
    eqn += "0";
    document.querySelector("#res").innerHTML = eqn;
    val += "0";
}

function clickSum(){
    eqn += "+";
    document.querySelector("#res").innerHTML = eqn;
    v1 = val;
    val = "";
    sn = "+"
}

function clickSub(){
    eqn += "-";
    document.querySelector("#res").innerHTML = eqn;
    v1 = val;
    val = "";
    sn = "-"
}

function clickMul(){
    eqn += "*";
    document.querySelector("#res").innerHTML = eqn;
    v1 = val;
    val = "";
    sn = "*"
}

function clickDiv(){
    eqn += "/";
    document.querySelector("#res").innerHTML = eqn;
    v1 = val;
    val = "";
    sn = "/";
}

function clickEql(){
    v1 = parseInt(v1, 2);
    v2 = parseInt(val, 2);
    //eqn = v1+sn+v2;
    eqn = Math.floor(eval(v1+sn+v2));
    document.querySelector("#res").innerHTML = eqn;
    val = "";
}

