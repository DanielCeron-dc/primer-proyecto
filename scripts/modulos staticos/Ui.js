

var ElmentToDelete;
export default class  UI {

    static CleanOverlay(){
            document.getElementById("OverlayModificator").innerHTML = ``;
            document.getElementById("buttons").innerHTML= ``;
            document.getElementById("deleteConfirmation").innerHTML= ``;
            document.getElementById("textPopup").innerHTML= ``;


    }

    static insertElement (prmWhere, fn){
        const  where = document.getElementById(prmWhere);
        const element = fn();
        where.appendChild(element);

    }
    // ! cuatro metodos relacionados con eliminar un objeto de UI 
    static DeleteSelected(){
        ElmentToDelete.parentElement.remove();
        UI.ShowMessage('Elemento eliminado satisfactoriamente','info');
    }
    static DeleteProductTwoParents(element){
      
        if (element.name === 'delete'){
            ElmentToDelete.parentElement.remove(); 
            UI.ShowMessage('Elemento eliminado satisfactoriamente','info')
        }
    }
    static DeleteProductThreeParents(element){
        if (element.name === 'delete'){
            console.log(element.parentElement.parentElement.parentElement.remove());
            UI.ShowMessage('Elemento eliminado satisfactoriamente','info')
        }
     }
    static DeleteWithOverlay (element, fn){
        if (fn()) {
            ElmentToDelete = element;
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