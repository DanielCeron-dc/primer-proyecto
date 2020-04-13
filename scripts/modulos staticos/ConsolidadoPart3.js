import UI from './Ui.js';
import Animaciones from "../animaciones/popup.js";


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


export default class Consolidado_tabla {

    static OverlayToEditRow(element){
        if (element.name === "editRow"){

            const tabla_activa = element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            
            UI.CleanOverlay();
            document.getElementById("OverlayModificator").innerHTML = 
            ` 
                 <h3> Editar Estudiante</h3>
                                
                    <input  id = "StudentName" value= "${tabla_activa.cells[2].textContent}" type="text" required class="form-control">
                    <input  id = "dateOfAdmission" value = "${tabla_activa.cells[1].textContent}" type="text" required class="form-control">
                    <div class="input-group">    
                    <input id = "studentCorreo" placeholder = "Correo del estudiante" type = "text"required class="form-control">
                    <input id = "studentGroup" placeholder = "Grupo del estudiante" type = "text"required class="form-control">
                     </div>
                <input  id = "description" placeholder = "Descripción" type="text" required class="form-control">
                <button class = "btn btn-success btn-spaceY25px" id = "Continuar">Continuar</button>
                <button class = "btn btn-danger btn-spaceY25px" id = "EliminateRow">Eliminar</button>

            
            `;
            Animaciones.MostrarOverlay();
          
            
      
            document.getElementById("Continuar").addEventListener('click', function(){
            
                Consolidado_tabla.EditRow(tabla_activa,document.getElementById("StudentName").value ,document.getElementById("dateOfAdmission").value )
                Animaciones.OculatarOverlay();
            })
           




        }
    }

    static EditRow (tabla,  nombre,  fecha_ingreso){
            tabla.cells[2].textContent = nombre;
            tabla.cells[1].textContent = fecha_ingreso;


    }







    static CreateTable (){

        const tabla_completa = document.getElementById("tabla");
        const tabla = document.getElementById("tabla-body");
        const conteo = tabla.children.length;
        const filaSiguiente  = document.getElementById("tabla-body").insertRow(-1);
        filaSiguiente.innerHTML = 
        `
        
                 
                    <tr class="table-active">
                      <th scope="row">${conteo+1}</th>
                      <th>${makeid(10)}</th>
                      <td>${makeid(10) + " "+ makeid(10)+" "+ makeid(10)+" "+ makeid(10)}</td>
                      <td>
                        <label class="label">
                          <input  class="label__checkbox" type="checkbox" />
                          <span class="label__text">
                            <span class="label__check">
                              <i class="fas fa-poll-h"></i>
                            </span>
                          </span>
                        </label>
                        <label class="label">
                          <input  class="label__checkbox" type="checkbox" />
                          <span class="label__text">
                            <span class="label__check">
                              <i class="fas fa-address-book"></i>
                            </span>
                          </span>
                        </label>
                        <label class="label">
                          <input  class="label__checkbox" type="checkbox" />
                          <span class="label__text">
                            <span class="label__check">
                              <i class="fas fa-ambulance"></i>
                            </span>
                          </span>
                        </label>
                        <label class="label">
                          <input  class="label__checkbox" type="checkbox" />
                          <span class="label__text">
                            <span class="label__check">
                              <i class="fas fa-file-medical"></i>
                            </span>
                          </span>
                        </label>
                        <label class="label">
                          <input  class="label__checkbox" type="checkbox" />
                          <span class="label__text">
                            <span class="label__check">
                              <i class="fas fa-file-signature"></i>
                            </span>
                          </span>
                        </label>
                        
                      </td>
                      <td>
                        
                        
                        <div id="menu">
                              
                            
                          <ul>
                              <li class="nivel1" >
                                <a href="#" class="nivel1" >
                                    <input  class="label__checkbox" type="checkbox"/>
                                      <label class="label" id = "February">
                            
                                        <input  class="label__checkbox" type="checkbox" id = "month" name = "February"/>
                                        <span class="label__text" >
                                          <span class="label__check_circle">
                                            <i class="fas fa-money-check-alt"></i>
                                            
                                          </span>
                                        </span>
                                      </label>
                                    
                                 </a>
                                  <ul class="nivel2">
                                       <li><a href="#">

                                        <h4>Febrero</h4>
                                        <h6>Sin pagar</h6>
                                        <h6 name = "2"></h6>
                                        <h6 name = "3"></h6>
                                        <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                       </a></li>
                                   </ul>
                               </li>
                          </ul>
                        </div>


                        <div id="menu">
                              
                            
                          <ul>
                              <li class="nivel1">
                                <a href="#" class="nivel1">
                                    <input  class="label__checkbox" type="checkbox" />
                                      <label class="label" >
                            
                                        <input  class="label__checkbox" type="checkbox" id = "month" name = "Marzo"/>
                                        <span class="label__text">
                                          <span class="label__check_circle">
                                            <i class="fas fa-money-check-alt"></i>
                                            
                                          </span>
                                        </span>
                                      </label>
                                    
                                 </a>
                                  <ul class="nivel2">
                                       <li><a href="#">

                                        <h4>Marzo</h4>
                                        <h6>Sin pagar</h6>
                                        <h6 name = "2"></h6>
                                        <h6 name = "3"></h6>
                                        <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                       </a></li>
                                   </ul>
                               </li>
                          </ul>
                        </div>


                          <div id="menu">
                              
                            
                            <ul>
                                  <li class="nivel1">
                                  <a href="#" class="nivel1">
                                      <input  class="label__checkbox" type="checkbox" />
                                        <label class="label" id = "April">
                              
                                          <input  class="label__checkbox" type="checkbox" id = "month" name = "Abril"/>
                                          <span class="label__text">
                                            <span class="label__check_circle">
                                              <i class="fas fa-money-check-alt"></i>
                                              
                                            </span>
                                          </span>
                                        </label>
                                      
                                   </a>
                                    <ul class="nivel2">
                                         <li><a href="#">

                                          <h4>Abril</h4>
                                          <h6>Sin pagar</h6>
                                          <h6 name = "2"></h6>
                                           <h6 name = "3"></h6>
                                           <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                         </a></li>
                                     </ul>
                                 </li>
                            </ul>
                          </div>


                          <div id="menu">
                              
                            
                            <ul>
                                <li class="nivel1">
                                  <a href="#" class="nivel1">
                                      <input  class="label__checkbox" type="checkbox" />
                                        <label class="label" id = "May">
                              
                                          <input  class="label__checkbox" type="checkbox" id = "month" name = "Mayo"/>
                                          <span class="label__text">
                                            <span class="label__check_circle">
                                              <i class="fas fa-money-check-alt"></i>
                                              
                                            </span>
                                          </span>
                                        </label>
                                      
                                   </a>
                                    <ul class="nivel2">
                                         <li><a href="#">

                                          <h4>Mayo</h4>
                                          <h6>Sin pagar</h6>
                                          <h6 name = "2"></h6>
                                           <h6 name = "3"></h6>
                                           <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                         </a></li>
                                     </ul>
                                 </li>
                            </ul>
                          </div>


                          <div id="menu">
                              
                            
                            <ul>
                                <li class="nivel1">
                                  <a href="#" class="nivel1">
                                      <input  class="label__checkbox" type="checkbox" />
                                        <label class="label" id = "June">
                              
                                          <input  class="label__checkbox" type="checkbox"id = "month" name = "Junio" />
                                          <span class="label__text">
                                            <span class="label__check_circle">
                                              <i class="fas fa-money-check-alt"></i>
                                              
                                            </span>
                                          </span>
                                        </label>
                                      
                                   </a>
                                    <ul class="nivel2">
                                         <li><a href="#">

                                          <h4>Junio</h4>
                                          <h6>Sin pagar</h6>
                                          <h6 name = "2"></h6>
                                          <h6 name = "3"></h6>
                                          <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                         </a></li>
                                     </ul>
                                 </li>
                            </ul>
                          </div>


                          <div id="menu">
                              
                            
                            <ul>
                                <li class="nivel1">
                                  <a href="#" class="nivel1">
                                      <input  class="label__checkbox" type="checkbox" />
                                        <label class="label" id = "July">
                              
                                          <input  class="label__checkbox" type="checkbox" id = "month" name = "Julio"/>
                                          <span class="label__text">
                                            <span class="label__check_circle">
                                              <i class="fas fa-money-check-alt"></i>
                                              
                                            </span>
                                          </span>
                                        </label>
                                      
                                   </a>
                                    <ul class="nivel2">
                                         <li><a href="#">

                                          <h4>Julio</h4>
                                          <h6>Sin pagar</h6>
                                          <h6 name = "2"></h6>
                                          <h6 name = "3"></h6>
                                          <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                         </a></li>
                                     </ul>
                                 </li>
                            </ul>
                          </div>




                          <div id="menu">
                              
                            
                            <ul>
                                <li class="nivel1">
                                  <a href="#" class="nivel1">
                                      <input  class="label__checkbox" type="checkbox" />
                                        <label class="label" id = "August">
                              
                                          <input  class="label__checkbox" type="checkbox" id = "month" name = "Agosto" />
                                          <span class="label__text">
                                            <span class="label__check_circle">
                                              <i class="fas fa-money-check-alt"></i>
                                              
                                            </span>
                                          </span>
                                        </label>
                                      
                                   </a>
                                    <ul class="nivel2">
                                         <li><a href="#">

                                          <h4>Agosto</h4>
                                          <h6>Sin pagar</h6>
                                          <h6 name = "2"></h6>
                                          <h6 name = "3"></h6>
                                          <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                         </a></li>
                                     </ul>
                                 </li>
                            </ul>
                          </div>





                          <div id="menu">
                              
                            
                            <ul>
                                <li class="nivel1">
                                  <a href="#" class="nivel1">
                                      <input  class="label__checkbox" type="checkbox" />
                                        <label class="label" id = "September">
                              
                                          <input  class="label__checkbox" type="checkbox" id = "month" name = "Septiembre"/>
                                          <span class="label__text">
                                            <span class="label__check_circle">
                                              <i class="fas fa-money-check-alt"></i>
                                              
                                            </span>
                                          </span>
                                        </label>
                                      
                                   </a>
                                    <ul class="nivel2">
                                         <li><a href="#">

                                          <h4>Septiembre</h4>
                                          <h6>Sin pagar</h6>
                                          <h6 name = "2"></h6>
                                          <h6 name = "3"></h6>
                                          <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                         </a></li>
                                     </ul>
                                 </li>
                            </ul>
                          </div>




                          <div id="menu">
                              
                            
                            <ul>
                                <li class="nivel1">
                                  <a href="#" class="nivel1">
                                      <input  class="label__checkbox" type="checkbox" />
                                        <label class="label" id = "October">
                              
                                          <input  class="label__checkbox" type="checkbox" id = "month" name = "Octubre" />
                                          <span class="label__text">
                                            <span class="label__check_circle">
                                              <i class="fas fa-money-check-alt"></i>
                                              
                                            </span>
                                          </span>
                                        </label>
                                      
                                   </a>
                                    <ul class="nivel2">
                                         <li><a href="#">

                                          <h4>Octubre</h4>
                                          <h6>Sin pagar</h6>
                                          <h6 name = "2"></h6>
                                          <h6 name = "3"></h6>
                                          <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                         </a></li>
                                     </ul>
                                 </li>
                            </ul>
                          </div>



                          <div id="menu">
                              
                            
                            <ul>
                                <li class="nivel1">
                                  <a href="#" class="nivel1">
                                      <input  class="label__checkbox" type="checkbox" />
                                        <label class="label" id = "November">
                              
                                          <input  class="label__checkbox" type="checkbox" id = "month" name = "Noviembre"/>
                                          <span class="label__text">
                                            <span class="label__check_circle">
                                              <i class="fas fa-money-check-alt"></i>
                                              
                                            </span>
                                          </span>
                                        </label>
                                      
                                   </a>
                                    <ul class="nivel2">
                                         <li><a href="#">

                                          <h4>Noviembre</h4>
                                          <h6>Sin pagar</h6>
                                          <h6 name = "2"></h6>
                                          <h6 name = "3"></h6>
                                          <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                         </a></li>
                                     </ul>
                                 </li>
                            </ul>
                          </div>


                         
                          <div id="menu">
                              
                            
                            <ul>
                                <li class="nivel1">
                                  <a href="#" class="nivel1">
                                      <input  class="label__checkbox" type="checkbox" />
                                        <label class="label" id = "December">
                              
                                          <input  class="label__checkbox" type="checkbox" id = "month" name = "Diciembre" />
                                          <span class="label__text">
                                            <span class="label__check_circle">
                                              <i class="fas fa-money-check-alt"></i>
                                              
                                            </span>
                                          </span>
                                        </label>
                                      
                                   </a>
                                    <ul class="nivel2">
                                         <li><a href="#">

                                          <h4>Diciembre</h4>
                                          <h6>Sin pagar</h6>
                                          <h6 name = "2"></h6>
                                          <h6 name = "3"></h6>
                                          <button class = "btn btn-outline-dark" id= "EditMonthlyPayment">editar</button>
                                         </a></li>
                                     </ul>
                                 </li>
                            </ul>
                          </div>
                        
                      </td>
                      <td>


                        <div id="menu_dos">
                          <ul>
                              <li class="nivel1">
                                <a href="#" class="nivel1">
                                    <input  class="label__checkbox" type="checkbox" />
                                      <label class="label" id = "December">
                            
                                        <input  class="label__checkbox" type="checkbox" id = "editRow" name = "editRow" />
                                        <span class="label__text">
                                          <span class="label__check_circle">
                                            <i class="fas fa-folder-plus"></i>
                                            
                                          </span>
                                        </span>
                                      </label>
                                    
                                 </a>
                                  <ul class="nivel2">
                                       <li><a href="#">

                                        <h4>Observaciones</h4>
                                        <h6 = "Observaciones">Sin observaciones</h6>
                                        <button class = "btn btn-outline-dark"id = "editRow" name = "editRow" >editar</button>
                                       </a></li>
                                   </ul>
                               </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    
                    
            
        
        
        `
    }


    static EditTable (element){

    }





}