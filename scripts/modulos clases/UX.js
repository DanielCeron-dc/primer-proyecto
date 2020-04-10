

/**
 * Clase que define la experiencia del Usuario
 */
export default class UX{
    /**
     * Recibe el Id del elemento, por cual le hace un acercamiento :D tamnbien es un DOM event 
     * @param {*} prmIdElmento 
     */
   static focus (prmIdElmento){
    document.getElementById(prmIdElmento).focus();
    
   }

}