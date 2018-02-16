namespace numeros {

    export class Racional {  //Graciela Mendez
        // Atrbutos
        n: number; // numerador
        d: number; // denominador

        //Metodos
        // constructor para asegurar valor inicial 
        //sobre carga del constructor
        constructor();
        constructor(n:number, d:number);
        constructor(n?:number, d?:number) {
            //undefined es valor de nada
            if (n==undefined&&d==undefined) {
                this.n=0;
                this.d=1;
            }
            else {
                this.n=n;
                this.d=d;
            }
        }

        //funcion de clase
        static suma(r1: Racional, r2:Racional): Racional {
            var rr: Racional;
            var nr,dr:number;

            nr= (r1.n*r2.d)+(r1.d*r2.n);
            dr= r1.d*r2.d;
            rr= new Racional(nr,dr);
            return rr;
        }

        // hacer las funciones de resta, mult, div
        // hacer la funcion reducir

        //funcion de objeto
        disp():void {

            console.log(this.n+"/"+this.d);
        }
        
        dispHtml(): void {
            document.writeln(this.n+"/"+this.d+"<br>");
        }

    }

}

       


