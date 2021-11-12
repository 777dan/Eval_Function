function printTable(from, to, step, func) {
    if (func === undefined) {
        return;
    }
    from = from;
    to = to;
    step = step || 1;
    document.write("<table border='1'>");
    for (var x = from; x <= to; x += step) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        document.write("<td>" + func(x) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

function quadratic(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

let expr = prompt("input expression for function");
// let f;
let strF = "f = function (x) {return " + expr + ";}";
eval(strF);
// f = function (x) { return x * expr; };
// eval(f);
//alert(functionStr);
// let ff = [quadratic, cube];
printTable(-4, 4, 1, f);

// let f1 = new Function("x", "return " + expr);