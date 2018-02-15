var numeros;
(function (numeros) {
    var Racional = /** @class */ (function () {
        function Racional(n, d) {
            //undefined es valor de nada
            if (n == undefined && d == undefined) {
                this.n = 0;
                this.d = 1;
            }
            else {
                this.n = n;
                this.d = d;
            }
        }
        //funcion de clase
        Racional.suma = function (r1, r2) {
            var rr;
            var nr, dr;
            nr = (r1.n * r2.d) + (r1.d * r2.n);
            dr = r1.d * r2.d;
            rr = new Racional(nr, dr);
            return rr;
        };
        // hacer las funciones de resta, mult, div
        // hacer la funcion reducir
        //funcion de objeto
        Racional.prototype.disp = function () {
            console.log(this.n + "/" + this.d);
        };
        Racional.prototype.dispHtml = function () {
            document.writeln(this.n + "/" + this.d + "<br>");
        };
        return Racional;
    }());
    numeros.Racional = Racional;
})(numeros || (numeros = {}));
/// <reference path="racional.ts"/>
function procesa(oper) {
    var r1, r2, rr;
    var sn1;
    var sd1;
    var sn2;
    var sd2;
    var soper;
    var frm;
    var frm_elements;
    frm = document.getElementById("frm");
    frm_elements = frm.elements;
    //alert("items:"+frm_elements.length);
    if (frm !== null && frm_elements !== null) {
        sn1 = frm_elements["num1"].value;
        sd1 = frm_elements["den1"].value;
        sn2 = frm_elements["num2"].value;
        sd2 = frm_elements["den2"].value;
        soper = oper;
    }
    else {
        console.log("No toma la forma o los elementos!!");
    }
    r1 = new numeros.Racional(Number(sn1), Number(sd1));
    r2 = new numeros.Racional(Number(sn2), Number(sd2));
    if (soper.localeCompare("+") == 0) {
        //alert("dentro suma");
        rr = numeros.Racional.suma(r1, r2);
    }
    r1.dispHtml();
    r2.dispHtml();
    rr.dispHtml();
}
//# sourceMappingURL=apphtml.js.map