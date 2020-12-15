/* requerir módulo autos */
let autos  = require('./autos')
// let vender = [];
let concesionaria = {
    autos: autos,

    buscarAuto : function(patente){
        return autos.filter((unaNota) => unaNota.patente === patente)
    }, 
    venderAuto : function(call){
        let vender = concesionaria.buscarAuto(call); 
        console.log('Patente: '+ call)       
        vender.forEach(element => {
            console.log('El estado de la venta del vehiculo es: '+ element.vendido);
        });
        
    }
}
concesionaria.venderAuto('APL123');