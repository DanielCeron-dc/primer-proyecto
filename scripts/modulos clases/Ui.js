

var ElmentToDelete;
export default class  UI {
    AddEstudiante (prmEstdiante)
    {
       const matriculaList = document.getElementById('matricula-list');
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
       matriculaList.appendChild(element);
       this.ResetForm();
    }
    ResetForm(){
        document.getElementById("matricula-form").reset();
    }
    addGrupo (prmGrupo)
    {
        var color1 = "danger";
        if (prmGrupo.color === "danger") { color1 = "warning"}
        const grupoList = document.getElementById('gruposCreados');
        const element = document.createElement('khe');
        element.innerHTML = `
        <div class = "btn btn-${prmGrupo.color} btn-space10px ">
                   <strong></strong>${prmGrupo.nameGroup}
                   <a href="#"  class = "btn btn-outline-${color1} btn-sm"  name = "BtnBorrarGrupo">X</a>
        </div>
        `;
       grupoList.appendChild(element)
       this.ResetFormGrupo();
    }
    ResetFormGrupo(){
        document.getElementById("Grupo-form").reset();
    }
    static DeleteSelected(){
        ElmentToDelete.parentElement.remove();
        UI.ShowMessage('Elemento eliminado satisfactoriamente','info');
    }
    DeleteProductTwoParents(element){
      
        if (element.name === 'delete'){
            ElmentToDelete.parentElement.remove();
            UI.ShowMessage('Elemento eliminado satisfactoriamente','info')
        }
    }


    static DeleteWithOverlay (element, fn){
        if (fn()) {
            ElmentToDelete = element;
        }

    }


    DeleteProductThreeParents(element){
       if (element.name === 'delete'){
           console.log(element.parentElement.parentElement.parentElement.remove());
           UI.ShowMessage('Elemento eliminado satisfactoriamente','info')
       }
    }

    




    static ShowMessage (message, cssClass){
      const div = document.createElement('div');
      div.className =  `alert alert-${cssClass} mt-4` ;
      div.appendChild(document.createTextNode(message));
       // mostrando en el DOM
     const container = document.querySelector('.container-fluid');
     const app = document.querySelector('#App');
     container.insertBefore(div,app);
     setTimeout(function() {
             document.querySelector('.alert').remove();
       } , 3000);
    }
}

function CheckOverlay() {
    if (document.querySelector('.overlay')){
        return true;
    }
    return false;
}