

/// <reference path="racional.ts"/>

function procesa(oper:any) { // el parametro de entrada viene de submit
    var r1, r2, rr: numeros.Racional;
   
    var sn1:string;
    var sd1:string;
    var sn2:string;
    var sd2:string;
    var soper:string;

    var frm: HTMLFormElement;
    var frm_elements: HTMLFormControlsCollection;
    
    frm = <HTMLFormElement> document.getElementById("frm");
    frm_elements= <HTMLFormControlsCollection> frm.elements;

    //alert("items:"+frm_elements.length);

    if (frm!==null && frm_elements!==null) {

        sn1=(<HTMLInputElement>frm_elements["num1"]).value;
        sd1=(<HTMLInputElement>frm_elements["den1"]).value;
        sn2=(<HTMLInputElement>frm_elements["num2"]).value;
        sd2=(<HTMLInputElement>frm_elements["den2"]).value;
        
        soper= <string> oper;

    }
    else {
        console.log("No toma la forma o los elementos!!")
    }

    r1= new numeros.Racional(Number(sn1), Number(sd1));
    r2= new numeros.Racional(Number(sn2), Number(sd2));
    
    var operacion = <string> oper;

    switch (operacion){
        case "+":
        {
            rr= numeros.Racional.suma(r1,r2);
            rr.reducir();
        }
        case "-":
        {
            rr= numeros.Racional.resta(r1,r2);
            rr.reducir();
        }
        case "*":
        {
            rr= numeros.Racional.multiplicacion(r1,r2);
            rr.reducir();
        }
        case "/":
        {
            rr= numeros.Racional.division(r1,r2);
            rr.reducir();
        }
    }

    r1.dispHtml();
    r2.dispHtml();
    rr.dispHtml();
}





