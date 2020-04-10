

if (document.getElementById('overlay')){



var	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup');


document.getElementById("btn-cerrar-popup").addEventListener('click', function(){ Animaciones.OculatarOverlay();})



}



export default class  Animaciones{
    static MostrarOverlay() {
        overlay.classList.add('active');
        popup.classList.add('active');
        
    }
    static OculatarOverlay () {
        
        overlay.classList.remove('active');
         popup.classList.remove('active');
    }
}



