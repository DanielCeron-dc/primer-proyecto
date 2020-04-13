
import UI from '../modulos staticos/Ui.js';
import funciones from "../modulos staticos/Matriculas.js";


// DOM EVENTS
var f = new Date();

const Month = ("0" + (f.getMonth() +1)).slice(-2);
const day = ("0" + f.getDate()).slice(-2);


document.getElementById("fechaDeIngreso").value = f.getFullYear()+"-" +Month+"-"+day;


document.getElementById('matricula-form').addEventListener('submit',function(e){
    
    funciones.InicializarComponentes();
    if(funciones.VerificarComponentes()===false){return e.preventDefault();}
    funciones.CreateStudent();
    e.preventDefault();
})


document.getElementById ('matricula-list').addEventListener('click', function(e){
    
    UI.DeleteProductThreeParents(e.target);
})