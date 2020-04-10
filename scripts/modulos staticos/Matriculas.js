
import Estudiante from "../modulos clases/ClsEstudiante.js";
import UX from "../modulos clases/UX.js";
import UI from "../modulos clases/Ui.js";


export default class Matriculas {
    static name;
    static identificacion;
    static celular;
    static años;
    static fechaDeNacimiento;

    static InicializarComponentes() {
        this.name = document.getElementById('name').value;
        this.identificacion = document.getElementById('identificacion').value;
        this.celular = document.getElementById('celular').value;
        this.años = document.getElementById('años').value;
        this.fechaDeNacimiento = document.getElementById('fechaDeNacimiento').value;
    }
    static VerificarComponentes(){
        if (this.name === ""){
            UX.focus('name');
            return false;
        }
        if (this.identificacion === ""){
            UX.focus('identificacion')
            return false;
        }       
        if (this.años === ""){ 
            UX.focus('años');
            return false;
        }
        if (this.fechaDeNacimiento === ""){
            UX.focus('fechaDeNacimiento');
            return false;
        }
        if (this.celular === ""){
            UX.focus('celular');
            return false;
        }

        
        return true;

    }

    static CreateStudent(){
        const estudiante = new Estudiante(this.name, this.identificacion, this.fechaDeNacimiento,  this.años,  this.celular);
        Matriculas.AddMatriculaToUI(estudiante);
        UI.ShowMessage('Estudiante Agregado Satisfactoriamente', 'success');


    }

    static AddMatriculaToUI (prmEstdiante){
        UI.insertElement("matricula-list" , function(){
        const element = document.createElement('div');
            element.innerHTML = `
                <div class = "card text-center mb-9">
                        <div class = "card-body">
                            <strong>Nombre</strong>: ${prmEstdiante.name}
                            <strong>Identificacion</strong>: ${prmEstdiante.identificacion}
                            <strong>Celular</strong>: ${prmEstdiante.celular}
                            <strong>Fecha de Nacimiento</strong>: ${prmEstdiante.fechaDeNacimiento}
                            <strong>Años</strong>: ${prmEstdiante.años}
                            <a href="#"  class = "btn btn-danger" name = "delete"> Delete </a>
                        </div>
                </div>
            `;
        document.getElementById("matricula-form").reset();
        return element;
        })
    }



}