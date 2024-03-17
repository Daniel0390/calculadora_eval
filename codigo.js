

let botones = document.querySelectorAll("button");
let pantalla = document.getElementById("pantalla");
 

botones.forEach(boton =>{
    boton.addEventListener("click", ()=>{
     const botonapretado = boton.textContent;

     if(boton.id === "igual"){
        pantalla.value= eval(pantalla.value);
        return;
     }

     if (pantalla.value == "0"){
        pantalla.removeAttribute("value");
     }

     pantalla.value += botonapretado;

        
       
    })
}) 

