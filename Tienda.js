export default class Tienda{
    constructor(cli){
        this.contA=0;
        this.contB=0;
        this.contC=0;
        this.acumpago=0;
        
    }
    procesar(cli){
        this.acumpago+=cli.pago();
        if(cli.tipo=== "A"){
            this.contA++;
           }
           if(cli.tipo==="B"){
               this.contB++;
       
           }
           if(cli.tipo==="C"){
               this.contC++;
    }
}
total(){
    return this.acumpago;
}
vendido(){
    if(this.contA>this.contB & this.contA>this.contC ) return "A";
    if(this.contB>this.contA & this.contB>this.contC ) return "B";
    if(this.contC>this.contA & this.contC>this.contB ) return "C";

}

}