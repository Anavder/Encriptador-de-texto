
const encriptarBoton = document.querySelector(".encriptar_boton");
const textoEncriptar =document.querySelector(".encriptar");
const alerta = document.querySelector(".texto_advertencia");
const mensajeEncriptado = document.querySelector(".copiar_texto")
const quitarMuñeco = document.querySelector(".cuadro_contenedor")
const botonCopiar = document.querySelector(".copiar")
const desencriptarBoton = document.querySelector(".desencriptar_boton")


encriptarBoton.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"")
    if(texto==""){
       alerta.style.background = "#973aa8";
       alerta.style.color = "#000000";
       alerta.style.fontWeight ="300";
       alerta.textContent = "Debes insertar un texto";

       setTimeout(()=>{
         alerta.removeAttribute("style")
       },1500);
    }
    else if(texto!== txt){
        alerta.style.background = "#973aa8";
       alerta.style.color = "#000000";
       alerta.style.fontWeight ="300";
       alerta.textContent = "El texto no debe tener acentos ni caracteres especiales";

       setTimeout(()=>{
         alerta.removeAttribute("style")
       },1500);
    }

    else if (texto!==texto.toLowerCase()){
        alerta.style.background = "#973aa8";
       alerta.style.color = "#000000";
       alerta.style.fontWeight ="300";
       alerta.textContent = "El texto no debe contener minúsculas";

       setTimeout(()=>{
         alerta.removeAttribute("style")
       },1500);
    }
    else{
       texto = texto.replace(/e/mg, "enter")
       texto = texto.replace(/i/mg, "imes")
       texto = texto.replace(/a/mg, "ai")
       texto = texto.replace(/o/mg, "ober")
       texto = texto.replace(/u/mg, "ufat")

       mensajeEncriptado.innerHTML = texto;
       botonCopiar.style.visibility = "inherit";
       quitarMuñeco.remove();
    }
    
})


desencriptarBoton.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"")
    if(texto==""){
       alerta.style.background = "#973aa8";
       alerta.style.color = "#000000";
       alerta.style.fontWeight ="300";
       alerta.textContent = "Debes insertar un texto";

       setTimeout(()=>{
         alerta.removeAttribute("style")
       },1500);
    }
    else if(texto!== txt){
        alerta.style.background = "#973aa8";
       alerta.style.color = "#000000";
       alerta.style.fontWeight ="300";
       alerta.textContent = "El texto no debe tener acentos ni caracteres especiales";

       setTimeout(()=>{
         alerta.removeAttribute("style")
       },1500);
    }

    else if (texto!==texto.toLowerCase()){
        alerta.style.background = "#973aa8";
       alerta.style.color = "#000000";
       alerta.style.fontWeight ="300";
       alerta.textContent = "El texto no debe contener mayúsculas";

       setTimeout(()=>{
         alerta.removeAttribute("style")
       },1500);
    }
    else{
       texto = texto.replace(/enter/mg, "e")
       texto = texto.replace(/imes/mg, "i")
       texto = texto.replace(/ai/mg, "a")
       texto = texto.replace(/ober/mg, "o")
       texto = texto.replace(/ufat/mg, "u")

       mensajeEncriptado.innerHTML = texto;
       botonCopiar.style.visibility = "inherit";
       quitarMuñeco.remove();
    }
    
});
botonCopiar.addEventListener("click",e=>{
    e.preventDefault();
     
    let copiar = mensajeEncriptado;
    copiar.select();
    document.execCommand("copy");

})