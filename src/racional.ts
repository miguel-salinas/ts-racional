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
// Graciela Mendez Caro Push
        //funcion de clase  
        static suma(r1: Racional, r2:Racional): Racional {
            var rr: Racional;
            var nr,dr:number;

            nr= (r1.n*r2.d)+(r1.d*r2.n);
            dr= r1.d*r2.d;
            rr= new Racional(nr,dr);
            return rr;
        }

        // Resta
        static resta(r1:Racional,r2:Racional):Racional{
            var rr:Racional;
            var nr,dr:number;

            nr = (r1.n * r2.d) - (r1.d * r2.n);
            dr = (r1.d * r2.d);

            rr = new Racional(nr,dr);

            return rr;
        }

        // Multiplicacion
        static multiplicacion(r1:Racional,r2:Racional):Racional{
            var rr:Racional;
            var nr,dr:number;

            nr = (r1.n * r2.n);
            dr = (r1.d * r2.d);

            rr = new Racional(nr,dr);

            return rr;
        }

        // Division
         static division(r1:Racional,r2:Racional):Racional{
            var rr:Racional;
            var nr,dr:number;

            nr = (r1.n * r2.d);
            dr = (r1.d * r2.n);

            rr = new Racional(nr,dr);

            return rr;
        }

        // Reduccion a la minima expresion con el algoritmo de euclides
        reducir():void{
            var r0,r1,r2:number;

            r0 = this.n;
            r1 = this.d;

            do {
                r2 = r0%r1
                r0 = r1;
                r1 = r2;
            } while (r2!=0);

            this.n = this.n/r0;
            this.d = this.d/r0;

            return;
        }

        // metodo de simplicacion por Elizabeth Montoya
        
        simplicacion():Racional{
            var rr: Racional;
            var nr,dr,i,menor,multiplo,hay_multiplicacion:number;
            nr=this.n;
            dr=this.d;

            do{
                if(nr<dr){
                    menor=nr;
                }else
                  menor=dr;
            
                i=2;
                hay_multiplicacion=0;

                while(i<=menor&&hay_multiplicacion==0){
                    if(nr%i==0&&dr%i==0){           
                        multiplo=i;
                        hay_multiplicacion=1;
                    }i++;
                }
                if(hay_multiplicacion==1){
                    nr=nr/multiplo;
                    dr=dr/multiplo;      
                }
            } while(hay_multiplicacion==1)

            rr=new Racional(nr,dr);
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

       


