import UI from './Ui.js';
import Animaciones from "../animaciones/popup.js";
import ClsEtudiante from "../modulos clases/ClsEstudiante.js";


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


 class Fila {
   
    constructor (prmFila, prmIndice,  prmFecha_ingreso, prmNombre, prmDocumentos, prmMensualidad){
        this.varFila = prmFila;
        this.indice = prmIndice;
        this.nombre = prmNombre;
        this.fecha_ingreso = prmFecha_ingreso;
        this.documentos = prmDocumentos;
        this.mensualidad = prmMensualidad; 
    }
 }

var filas = new Array();
Array.prototype.orderByString=function(property,sortOrder,ignoreCase){
  if (sortOrder!=-1 && sortOrder!=1) sortOrder=1;
  this.sort(function(a,b){
    var stringA=a[property],stringB=b[property];
    // Si un valor es null o undefined, se convierte a cadena vacía.
    if (stringA==null) stringA = '';
    if (stringB==null) stringB = '';
    // Si ignoreCase es true, se convierten ambas variables a minúsculas.
    if (ignoreCase==true){stringA=stringA.toLowerCase();stringB=stringB.toLowerCase()}
    var res = 0;
    if (stringA<stringB) res = -1;
    else if (stringA>stringB) res = 1;
    return res*sortOrder;
  })
}


function SortRow (){
  
  filas.orderByString("nombre");
  let conteo = 1;
 
 filas.forEach(fila =>{
   let filaSiguiente  = document.getElementById("tabla-body").insertRow(-1);
   filaSiguiente.innerHTML = fila.varFila;
   document.getElementById("celdaIndice"+fila.indice).textContent = conteo;
   conteo = conteo +1;
  
  
    
}
 )
  

 
 
}

export default class Consolidado_tabla {

    static OverlayToEditRow(element){
        if (element.name === "editRow"){
            const tabla_activa = element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            
            const indice = tabla_activa.cells[0].textContent;

            const campoObservaciones = document.getElementById("campoObservaciones"+indice).textContent;
            UI.CleanOverlay();
            document.getElementById("OverlayModificator").innerHTML = 
            ` 
                 <h3> Editar Estudiante</h3>
                                
                    <input  id = "StudentName" value= "${tabla_activa.cells[2].textContent}" type="text" required class="form-control">
                    <div class="input-group">   
                      <input type="date" id = "birthday" value = "1950-01-01"  min="1950-01-01" max="2100-12-31"  required class = "form-control">
                      <input  id = "dateOfAdmission" value = "${tabla_activa.cells[1].textContent}" type="text" required class="form-control">
                    </div>
                    <div class="input-group">    
                      <input id = "studentCorreo" placeholder = "Correo del estudiante" type = "text"required class="form-control">
                      
                            <div id = "btnMenuDesplegable" class="btn btn-outline border-dark btn-sm btn-space-10px" >
                            <div class="nav-item dropdown ">
                              <a id= "MenuDesplegable" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Grupo</a>
                              <div class="dropdown-menu" style="position: absolute; transform: translate3d(0px, 40px, 0px); top: 0px; left: 0px; will-change: transform;" x-placement="bottom-start">
                                <a id = "opcionWarning"class="dropdown-item-warning" href="#">Warning</a>
                                <a id = "opcionPrimary"class="dropdown-item-primary" href="#">primary</a>
                                <a id = "opcionSecondary"class="dropdown-item-secondary" href="#">Secondary</a>
                                <a id = "opcionSuccess"id = "Succes" class="dropdown-item-success" href="#">Success</a>
                                <a id = "opcionInfo" class="dropdown-item-info" href="#">Info</a>
                                <a id = "opcionDanger" class="dropdown-item-danger" href="#">Danger</a>
                              </div>
                            </div> 

                 </div>
                     </div>
                <input  id = "description" placeholder = "Observaciones" value = "${campoObservaciones}" type="text" required class="form-control">
                <button class = "btn btn-success btn-spaceY25px" id = "Continuar">Continuar</button>
                <button class = "btn btn-danger btn-spaceY25px" id = "EliminateRow">Eliminar</button>

            
            `;
            Animaciones.MostrarOverlay();
          
            
      
            document.getElementById("Continuar").addEventListener('click', function(){
                
                Consolidado_tabla.EditRow(tabla_activa,document.getElementById("StudentName").value ,document.getElementById("dateOfAdmission").value ,document.getElementById("description").value )
                Animaciones.OculatarOverlay();
            })
           




        }
    }

    static EditRow (tabla,  nombre,  fecha_ingreso, descripcion){

            const indice = tabla.cells[0].textContent;
            document.getElementById("campoObservaciones"+indice).textContent = descripcion;
            tabla.cells[2].textContent = nombre;
            tabla.cells[1].textContent = fecha_ingreso;


    }


  static CreateTable_Fazt(){
    const estudiantenuevo  = new ClsEtudiante(makeid(10) + " "+ makeid(10)+" "+ makeid(10)+" "+ makeid(10),15454, makeid(10),7,8 )
    Consolidado_tabla.CreateTable(estudiantenuevo)
  }

  static EliminateTable(tabla){
    document.getElementById("tabla-body").innerHTML =``
  }


    static CreateTable (estudiante){

        const tabla = document.getElementById("tabla-body");
        var conteo = tabla.children.length;
        const filaSiguiente  = document.getElementById("tabla-body").insertRow(-1);
        var prueba;
        prueba = 
        `
        
                 
                    <tr class="table-active" id = "tabla#${conteo+1}">
                      <th scope="row" type = "number" id = "celdaIndice${conteo+1}">${conteo+1}</th>
                      <td id = "CeldaFechaINgreso${conteo+1}">${estudiante.fechaDeNacimiento}</td>
                      <td id = "CeldaNombre${conteo+1}">${estudiante.name}</td>
                      <td id = "CeldaDocumentos${conteo+1}">
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
                      <td id = "celdaMensualidad${conteo+1}">
                        
                        
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
                      <td id = "CeldaDemas${conteo+1}">


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
                                        <h6 id = "campoObservaciones${conteo+1}" >Sin observaciones</h6>
                                        <button class = "btn btn-outline-dark"id = "editRow" name = "editRow" >editar</button>
                                       </a></li>
                                   </ul>
                               </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    
                    
            
        
        
        `

        filaSiguiente.innerHTML = prueba;
        conteo = conteo +1;
        const fila_creada = prueba;
        const indice = document.getElementById("celdaIndice"+conteo).textContent;
        const fecha_ingreso= document.getElementById("CeldaFechaINgreso"+conteo).textContent;
        const nombre = document.getElementById("CeldaNombre"+conteo).textContent;
        const documentos = "hola";
        const mensualidad = "holi";
     
        const nuevaFila = new Fila(fila_creada,indice,fecha_ingreso,nombre,documentos,mensualidad);
        filas.push(nuevaFila);
     
        Consolidado_tabla.EliminateTable(tabla);
        SortRow();
        
    }







}