export default class Cliente{
    constructor({cedula,tipo,cantidad}){
this.cedula=cedula;
this.tipo=tipo;
this.cantidad=cantidad;
    }
    set cedula(cedula){
        this._cedula=+cedula;
    }
    get cedula(){
        return this._cedula
    }
    set tipo(tipo){
        this._tipo=tipo;
    }
    get tipo(){
        return this._tipo;
    }
    
    set cantidad(cantidad){
        this._cantidad=+cantidad;
    }
    get cantidad(){
        return this._cantidad;
    }

    pago(){
    if(this.tipo=== "A"){
     return 10*this.cantidad;
    }
    if(this.tipo==="B"){
        return 5*this.cantidad;

    }
    if(this.tipo==="C"){
        return 20*this.cantidad;
    }
}

}