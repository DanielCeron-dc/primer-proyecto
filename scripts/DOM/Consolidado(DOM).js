
import UI from '../modulos clases/Ui.js';
import funciones from "../modulos staticos/Consolidado.js";


document.getElementById("Grupo-form").addEventListener('submit',function(e){
    funciones.InicializarComponentes();
    if (funciones.VerificarComponentes() === false){return e.preventDefault();} //si es falso evita de que cree un grupo 
    funciones.CreateGroup();
    e.preventDefault();
})

  //mostrar creador de grupos
document.getElementById('BtnCrearGrupo').addEventListener('click', function(e) {funciones.ShowGroupCreator();})
document.getElementById('opcionWarning').addEventListener('click', function(e) {
    document.getElementById('btnMenuDesplegable').className = "btn btn-outline border-warning btn-sm btn-space-10px";
    document.getElementById('MenuDesplegable').textContent = "warning";
})
document.getElementById('opcionPrimary').addEventListener('click', function(e) {
    document.getElementById('btnMenuDesplegable').className = "btn btn-outline border-primary btn-sm btn-space-10px";
    document.getElementById('MenuDesplegable').textContent = "primary";
})
document.getElementById('opcionSecondary').addEventListener('click', function(e) {
    document.getElementById('btnMenuDesplegable').className = "btn btn-outline border-secondary btn-sm btn-space-10px";
    document.getElementById('MenuDesplegable').textContent = "secondary";
})
document.getElementById('opcionSuccess').addEventListener('click', function(e) {
    document.getElementById('btnMenuDesplegable').className = "btn btn-outline border-success btn-sm btn-space-10px";
    document.getElementById('MenuDesplegable').textContent = "success";
})
document.getElementById('opcionInfo').addEventListener('click', function(e) {
    document.getElementById('btnMenuDesplegable').className = "btn btn-outline border-info btn-sm btn-space-10px";
    document.getElementById('MenuDesplegable').textContent = "info";
})
document.getElementById('opcionDanger').addEventListener('click', function(e) {
    document.getElementById('btnMenuDesplegable').className = "btn btn-outline border-danger btn-sm btn-space-10px";
    document.getElementById('MenuDesplegable').textContent = "danger";
})
if  (document.getElementById('deleteConfirmation')){
    document.getElementById('deleteConfirmation').addEventListener('click', function (){
        UI.DeleteWithOverlay();
    })
}


// detectar si en la app se undio a algun boton con el nombre app siempre esta activa :C
document.getElementById ('App').addEventListener('click', function(e){
    const ui = new UI();
    ui.DeleteProductTwoParents(e.target);
})
document.getElementById ('gruposCreados').addEventListener('click', function(e){
    //cambiar color cabecera de la tabla
    funciones.ChangeTableHeader(e.target.className);
    
  
})


// cuando se una a una mensualidad  hacer 



