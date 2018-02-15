

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
    
    if (soper.localeCompare("+")==0) { //Suma
        //alert("dentro suma");
        rr= numeros.Racional.suma(r1,r2);
    }

    r1.dispHtml();
    r2.dispHtml();
    rr.dispHtml();
}





