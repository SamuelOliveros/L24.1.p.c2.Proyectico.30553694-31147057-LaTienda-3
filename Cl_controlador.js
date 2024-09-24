import Cliente from "./Cliente.js";
import ICliente from "./ICliente.js";
import Tienda from "./Tienda.js";
import ITienda from "./ITienda.js";
    export default class Cl_controlador{
        constructor(){
            this.Tienda = new Tienda();
            this.ITienda = new ITienda(this);
            this.ICliente = new ICliente(this);
        }
        mostrarVistaTienda(){
            this.ICliente.ocultar();
            this.ITienda.mostrar();
        }
        mostrarVistaCli(){
            this.ITienda.ocultar();
            this.ICliente.mostrar();
        }
        agregarCli({cedula, tipo, cantidad}){
            let cli = new Cliente({cedula, tipo, cantidad});
            this.Tienda.procesar(cli);
            this.ITienda.reportarCli({
                cedula: cli.cedula,
                tipo: cli.tipo,
                cantidad: cli.cantidad,
                pago: cli.pago(),
                total: this.Tienda.total(),
                vendido: this.Tienda.vendido(),
            });
            this.mostrarVistaTienda();
        }
    
    }
