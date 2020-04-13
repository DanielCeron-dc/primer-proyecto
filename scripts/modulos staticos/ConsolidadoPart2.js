
import ClsGrupo from "../modulos clases/ClsGrupo.js";
import ClsMEnsualidad from "../modulos clases/ClsMensualidad.js";
import UI from './Ui.js';
import Animaciones from "../animaciones/popup.js";



var _Mensualidad;

export default class Consolidado_Mensualidad {

    
    static OverlayToAddMonthlyPayment(element){
        
        if (element.id === "month"){
            
            if (element.checked === false){return element.checked = true}
            const tabla_activa = element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            
            UI.CleanOverlay();
            var f = new Date();
            const date = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
            document.getElementById("OverlayModificator").innerHTML = 
            
            
            
            ` 
                 
                <h6>¿quiere diligenciar la mensualidad de ${element.name} del estudiante: ${tabla_activa.cells[2].textContent} ?</h6>
                <div class="input-group">
                    <input  id = "UbicacionRecibo" placeholder  = "ubicacion copia recibo" type="text" required class="form-control">
                    <input  id = "paymentDate" value = "${date}" type="text" required class="form-control">

                </div>
                <input  id = "description" placeholder = "Descripción" type="text" required class="form-control">
                <button class = "btn btn-success btn-spaceY25px" id = "Continuar">Continuar</button>

            
            
            
            `;
            Animaciones.MostrarOverlay();
          
            
            element.checked = false;
            document.getElementById("Continuar").addEventListener('click', function(){
                Consolidado_Mensualidad.InicializarComponentes();
                Consolidado_Mensualidad.AddMonthlyPayment(element);
                element.checked = true;
                Animaciones.OculatarOverlay();
            })
           
        }
    }
    static overlayToEditMonthlyPayment (element){
        if (element.id === "EditMonthlyPayment" ){
            const checkbox = element.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.nextSibling.nextSibling.firstElementChild;
            if(checkbox.checked === false)
            {return checkbox.checked = false ;}


           
            UI.CleanOverlay();
            const tabla_activa = element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            const _fechaDePago = element.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent.split(":");
            const _Ubicacion = element.previousSibling.previousSibling.previousSibling.previousSibling.textContent.split(":");
            const _month = element.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
            document.getElementById("OverlayModificator").innerHTML = 
            
            
            
            ` 
                <h3> Editar </h3>
                <h6>¿quiere editar la mensualidad de ${_month} del estudiante: ${tabla_activa.cells[1].textContent} ?</h6>
                <div class="input-group">
                <input  id = "UbicacionRecibo" value = "${_Ubicacion[1]}" placeholder  = "ubicacion copia recibo" type="text" required class="form-control">
                <input  id = "paymentDate" value = "${_fechaDePago[1]}" type="text" required class="form-control">

                </div>
                <input  id = "description" value = "${element.previousSibling.previousSibling.textContent}"placeholder = "Descripción" type="text" required class="form-control">
                <button class = "btn btn-success btn-spaceY25px" id = "Continuar">Continuar</button>
                <button class = "btn btn-danger btn-spaceY25px" id = "Cancelar">Borrar Mensualidad</button>
            
            
            
            `;
            Animaciones.MostrarOverlay();
            document.getElementById("Continuar").addEventListener('click', function(){
                Consolidado_Mensualidad.InicializarComponentes();
                Consolidado_Mensualidad.AddMonthlyPayment(element.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.nextSibling.nextSibling.firstElementChild);
                Animaciones.OculatarOverlay();
            })
            document.getElementById("Cancelar").addEventListener('click', function(){
                checkbox.checked = false;
                Consolidado_Mensualidad.EliminateMonthlyPayment(element.parentElement.parentElement.parentElement, _month)
               
                Animaciones.OculatarOverlay();
            })

        }
    }
    static EliminateMonthlyPayment (nivel2, month){
        nivel2.innerHTML = `
                                        <li><a href="#">
                                             <h4>${month}</h4>
                                             <h6>Sin pagar</h6>
                                             <h6 name = "2"></h6>
                                             <h6 name = "3"></h6>
                                             <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                         </a></li>
        
        
        `
    }

    static InicializarComponentes (){
        const location_receipt = document.getElementById("UbicacionRecibo").value;
        const paymentDate = document.getElementById("paymentDate").value;
        const description = document.getElementById("description").value;
        _Mensualidad = new ClsMEnsualidad(paymentDate,location_receipt,description);
    }


    static AddMonthlyPayment (element){
        
        const state = element.parentElement.parentElement.nextSibling.nextSibling.firstElementChild.firstElementChild.firstElementChild;
        const h6_1 = state.nextSibling.nextSibling;
        const h6_2 = h6_1.nextSibling.nextSibling;
        const h6_3 = h6_2.nextSibling.nextSibling;
       
        h6_1.innerHTML = `pagado el: ${_Mensualidad.fecha}`
        h6_2.innerHTML = `Ubicación: ${_Mensualidad.direccion}`
        h6_3.innerHTML = `${_Mensualidad.descripcion}`
    
    }

}