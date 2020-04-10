
import ClsGrupo from "../modulos clases/ClsGrupo.js";
import UI from '../modulos clases/Ui.js';



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