const input =  document.getElementById('input')

 let descripcion =  document.getElementById('descripcion')
 let muneco =  document.getElementById('muneco');
 
const encriptar =  ()=> {
    console.log(input);
    let letras = input.value.split("")
    let arrayLetras = []; 

    for(let i = 0;  i< letras.length; i++){
      

      arrayLetras[i] =  letras[i];

      if(arrayLetras[i] == "e"){
        arrayLetras[i]= "enter"
      }
      if (arrayLetras[i] == "i"){
        arrayLetras[i]= "imes"
      }
      if (arrayLetras[i] == "a"){
        arrayLetras[i]= "ai"
      }
      if (arrayLetras[i] == "o"){
        arrayLetras[i]= "ober"
      }
      if (arrayLetras[i] == "u"){
        arrayLetras[i]= "ufat"
      }
     
     


    }
    console.log(arrayLetras)
    let textoEncriptado = arrayLetras.join("")
    descripcion.innerHTML="";
    descripcion.innerHTML= textoEncriptado;
}
const desencriptar = ()=> {

    let letras = input.value
    console.log(letras);
   
   
    var textoDesencriptado = letras.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    descripcion.innerHTML="";
    descripcion.innerHTML=  textoDesencriptado;
    console.log(textoDesencriptado);

}

