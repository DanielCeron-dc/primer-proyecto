
import funciones from "../modulos staticos/Consolidado.js";
import funciones_mensualidad from "../modulos staticos/ConsolidadoPart2.js"

 // ? crear grupo 
document.getElementById("Grupo-form").addEventListener('submit',function(e){
    funciones.InicializarComponentes();
    if (funciones.VerificarComponentes() === false){return e.preventDefault();} //si es falso evita de que cree un grupo 
    funciones.CreateGroup();
    e.preventDefault();
})


// ? unidir al boton "+" para desplegar menu de opciones para crear grupo
document.getElementById('BtnCrearGrupo').addEventListener('click', function(e) {funciones.ShowGroupCreator();})

// ? cuando escogemos un color del menu desplegable de colores para grupos
// ? con esto el boton de escoger color se actualiza con el boton escogido
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
// ? si confirmas que quieres eliminar un grupo en el overlay
if  (document.getElementById('deleteConfirmation')){
    document.getElementById('deleteConfirmation').addEventListener('click', function (){
        funciones.EliminateGroup();
    })
}
// ? cambiar color cabecera de la tabla
document.getElementById ('gruposCreados').addEventListener('click', function(e){
    funciones.ChangeTableHeader(e.target.className);
})

// ! metodo muy global
// ? detectar si en la app se undio a algun boton con el nombre app siempre esta activa :C
document.getElementById ('App').addEventListener('click', function(e){
    funciones_mensualidad.OverlayToAddMonthlyPayment(e.target);
    funciones_mensualidad.overlayToEditMonthlyPayment(e.target);
    funciones.OverlayToEliminateGroup(e.target);
    
})




// cuando se una a una mensualidad  hacer 



