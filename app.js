// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos=[]; //Creación del array donde se guardará la lista de amigos

function agregarAmigo(){ //Función para agregar nombres a la lista
    let input = document.getElementById("amigo"); //Lama al input mediante su id
    let nombre = input.value.trim();

    //Condición si no se agrega un texto/nombre
    if (nombre === ""){
        alert("Por favor, ingrese un nombre válido");
        input.focus(); //Enfoca el input para que el usuario pueda escribir
        return 0;
    }

    listaAmigos.push(nombre);  //Agrega el nombre al array
    input.value =""; //Borra el texto anterior
    input.focus();
    actualizalista(); //Actualiza la lista una vez que se agregó el nuevo nombre     
}

function actualizalista(){ //Función para mostrar los nombres de la lista
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i=0; i < listaAmigos.length; i++) { //Recorre el array
        let li = document.createElement("li"); //Crea un elemento de lista
        li.textContent = listaAmigos[i]; //Agrega el texto del array al elemento de lista
        lista.appendChild(li); //Agrega el elemento de lista al HTML
    }
}

let resultado = document.getElementById("sortearAmigo"); //Llama al div donde se mostrará el resultado
    sortearAmigo.onclick=function(){//Función para sortar un amigo agregada al botón
    if (listaAmigos.length >0){ //Condición para elegir amigo siempre que haya nombres en la lista
        function generarNumeroAleatorio(min,max){
            return Math.floor(Math.random()*((max+1)-min)+min);
           }
            resultado.innerHTML ="El amigo secreto es: " + listaAmigos[generarNumeroAleatorio(0,listaAmigos.length-1)];
            lista    
        } else {
                lista.innerHTML = "<li>No hay amigos en la lista</li>";
            }
    }


   