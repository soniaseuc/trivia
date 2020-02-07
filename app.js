//pantalla que pregunta nombre
let name = prompt ("¿Cual es tu nombre?");
saludo=document.getElementById("cont1");
saludo.innerHTML= "Hola, "+name+" pon a prueba tus conocimientos...";

//declarando variables de cine y musica
const startScreen = document.getElementById("startScreen");
const buttonCine = document.getElementById("buttonCine");
const buttonMusic = document.getElementById("buttonMusic");
const cine1 = document.getElementById("cine1");
const cine2 = document.getElementById("cine2");
const cine3 = document.getElementById("cine3");
const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");
const music3 = document.getElementById("music3");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const next5 = document.getElementById("next5");
const next6 = document.getElementById("next6");
const valorCine1 = document.getElementById("respuestaValidaCine1");
const valorCine2 = document.getElementById("respuestaValidaCine2");
const valorCine3 = document.getElementById("respuestaValidaCine3");
const valorMusic1 = document.getElementById("respuestaValidaMusic1");
const valorMusic2 = document.getElementById("respuestaValidaMusic2");
const valorMusic3 = document.getElementById("respuestaValidaMusic3");

//variables de contador de resultados que empiezan en 0
let totalCine = 0;
let totalMusic = 0;

//evento para iniciar el juego en Cine
buttonCine.addEventListener("click",() =>{
  totalCine= 0;
  cine1.style.display = "block";
  startScreen.style.display = "none";
});

//Evento que al hacer click, valida respuesta correcta (1) y pasa a la siguiente pregunta (2)
next1.addEventListener("click",() =>{
    const valorCine1 = respuestaValidaCine1.value;
    const checkCine1 = respuestaValidaCine1.checked;
   
if (valorCine1==="1" && checkCine1===true){
    totalCine++
    console.log(totalCine);
    cine2.style.display = "block";
    cine1.style.display = "none";
}else{
    cine2.style.display = "block";
    cine1.style.display = "none";
}
});


//Evento que al hacer click, valida respuesta correcta (2) y pasa a la siguiente pregunta (3)
next2.addEventListener("click",() =>{
   const valorCine2 = respuestaValidaCine2.value;
   const checkCine2 = respuestaValidaCine2.checked;

   if (valorCine2==="1" && checkCine2===true){
       totalCine++
       console.log(totalCine);
       cine3.style.display = "block";
       cine2.style.display = "none"; 
    } else{
        cine3.style.display = "block";
        cine2.style.display = "none";   
    }
});


//Evento que al hacer click, valida respuesta correcta (3), suma resultados y lo muestra en la página de inicio
next3.addEventListener("click",() =>{
    const valorCine3 = respuestaValidaCine3.value;
    const checkCine3 = respuestaValidaCine3.checked;
    
if (valorCine3==="1" && checkCine3===true){
    totalCine++
    console.log(totalCine);
    startScreen.style.display = "block";
    cine3.style.display = "none";
    saludo.innerHTML= name+", tienes "+totalCine+" respuestas correctas.";
        
} else{
    startScreen.style.display = "block";
    cine3.style.display = "none";
    saludo.innerHTML= name+", tienes "+totalCine+" respuestas correctas.";
}
});

//evento para iniciar juego en categoría Música

buttonMusic.addEventListener("click",() =>{
    totalMusic = 0;
    music1.style.display = "block";
    startScreen.style.display = "none";
});

//Evento que al hacer click, valida respuesta correcta (1) y pasa a la siguiente pregunta (2)
next4.addEventListener("click",() =>{
    const valorMusic1 = respuestaValidaMusic1.value;
    const checkMusic1 = respuestaValidaMusic1.checked;

if (valorMusic1==="1" && checkMusic1===true){
    totalMusic++
    console.log(totalMusic);
    music2.style.display = "block";
    music1.style.display = "none";
} else {
    music2.style.display = "block";
    music1.style.display = "none";
}
});
//Evento que al hacer click, valida respuesta correcta (2) y pasa a la siguiente pregunta (3)
next5.addEventListener("click",() =>{
    const valorMusic2 = respuestaValidaMusic2.value;
    const checkMusic2 = respuestaValidaMusic2.checked;

if (valorMusic2==="1" && checkMusic2===true){
    totalMusic++
    console.log(totalMusic);
    music3.style.display = "block";
    music2.style.display = "none";
} else {
    music3.style.display = "block";
    music2.style.display = "none";

}
});
//Evento que al hacer click, valida respuesta correcta (3), suma resultados y lo muestra en la página de inicio

next6.addEventListener("click",() =>{
    const valorMusic3 = respuestaValidaMusic3.value;
    const checkMusic3 = respuestaValidaMusic3.checked;
    
if (valorMusic3==="1" && checkMusic3===true){
    totalMusic++
    console.log(totalMusic);
    startScreen.style.display = "block";
    music3.style.display = "none";
    saludo.innerHTML= name+", tienes "+totalMusic+" respuestas correctas.";
        
} else{
    startScreen.style.display = "block";
    music3.style.display = "none";
    saludo.innerHTML= name+", tienes "+totalMusic+" respuestas correctas.";
}
});