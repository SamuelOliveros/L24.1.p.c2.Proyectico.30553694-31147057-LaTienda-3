export default class ICliente{
    constructor(controlador){
        this.vista=document.getElementById("cliForm");
this.inCedula=document.getElementById("cliForm_inCedula");
this.inTipo=document.getElementById("cliForm_inTipo");

this.inCantidad=document.getElementById("cliForm_inCantidad");

this.btAceptar=document.getElementById("cliForm_btAceptar");
this.btAceptar.onclick = () => 
    controlador.agregarCli({
        cedula: this.inCedula.value,
        tipo: this.inTipo.value, 
        
        cantidad: this.inCantidad.value
       
    });
    this.ocultar();
};
ocultar(){
    this.vista.hidden = true;
} 
mostrar(){
    this.vista.hidden = false;
}
}
    