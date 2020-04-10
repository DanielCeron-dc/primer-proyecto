
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
        const ui = new UI();
        ui.AddEstudiante(estudiante);
        UI.ShowMessage('Estudiante Agregado Satisfactoriamente', 'success');


    }



}