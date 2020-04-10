
import ClsGrupo from "../modulos clases/ClsGrupo.js";
import UI from '../modulos clases/Ui.js';
import Animaciones from "../animaciones/popup.js";



export default class Consolidado {
    
    static GroupName;
    static GroupColor;

    static InicializarComponentes(){
        this.GroupName = document.getElementById('nameGroup').value;
        this.GroupColor = document.getElementById("MenuDesplegable").textContent;
    }


    static VerificarComponentes (){
        if (this.GroupName === ""){
          
            UI.ShowMessage('Completa los espacios', 'danger');
            return false;

        }
        if (this.GroupColor === "Color"){
            
            UI.ShowMessage('Elije un color', 'danger');
            return false;
            
        }

        return true;

    }


    static OverlayToEliminateGroup (Element){
        if (Element.name === 'BtnBorrarGrupo'){
            UI.DeleteWithOverlay(Element, function () {
                const array = Element.parentElement.innerText.split(" ");
                document.getElementById('textPopup').innerHTML = `¿Quieres eliminar el grupo ${array[0]}? `
                document.getElementById('deleteConfirmation').innerHTML = `<a href="#" class="btn btn-danger btn-submit-animacion" >Sí eliminar</a>`
                Animaciones.MostrarOverlay(); 
                return true;
            })
        }
         return false; 
    }

    static EliminateGroup (){
        UI.DeleteSelected();
        Animaciones.OculatarOverlay();
    }



    static CreateGroup (){
        const ui = new UI();
        const grupo = new ClsGrupo(this.GroupName, this.GroupColor);
        ui.addGrupo(grupo);
    }

    static ShowGroupCreator (){
        if (document.getElementById('BtnCrearGrupo').textContent === "-"){
            document.getElementById('GrupoForm').style.display = "none";
            return document.getElementById('BtnCrearGrupo').textContent = "+"
        }
        if (document.getElementById('BtnCrearGrupo').textContent === "+"){
            document.getElementById('GrupoForm').style.display = "block";
             document.getElementById('BtnCrearGrupo').textContent = "-"
            setTimeout(() => {
                document.getElementById('GrupoForm').style.display = "none";
                return document.getElementById('BtnCrearGrupo').textContent = "+"
            } , 30000);
        }
    }


    static ChangeTableHeader (targetClassName){
        const Array = targetClassName.split(" ");
        const color = Array[1].split("-");
        document.getElementById('tabla').style.display = "";
        document.getElementById('tabla-cabecera').className = "table-"+ color[1];
    }


}