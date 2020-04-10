
import UI from '../modulos clases/Ui.js';
import funciones from "../modulos staticos/Matriculas.js";


// DOM EVENTS
document.getElementById('matricula-form').addEventListener('submit',function(e){
    
    funciones.InicializarComponentes();
    if(funciones.VerificarComponentes()===false){return e.preventDefault();}
    funciones.CreateStudent();
    e.preventDefault();
})

    

document.getElementById('matricula-form').addEventListener('keypress', function(e) {
    
    
})

document.getElementById ('matricula-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.DeleteProductThreeParents(e.target);
})