export default class ITienda{
    constructor(controlador){
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.lblTotal = document.getElementById("mainForm_lblTotal");
        this.lblVendido = document.getElementById("mainForm_lblVendido");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.btAgregar.onclick = () => controlador.mostrarVistaCli();
    }
    ocultar(){
        this.vista.hidden = true;
    }
    mostrar(){
        this.vista.hidden = false;
    }
     reportarCli({
        cedula,
        tipo,
        cantidad,
        pago,
        total,
        vendido,
       
}){
    this.tabla.innerHTML +=`
<tr>
    <td>${cedula}</td>
    <td>${tipo}</td>
    <td>${cantidad}</td>
    <td>${pago}</td>
    </tr>    
`;
this.lblTotal.innerHTML = total;
this.lblVendido.innerHTML =vendido;  
}
}