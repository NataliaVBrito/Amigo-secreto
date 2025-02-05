let amigos = []; 
let listaAmigos = document.getElementById('listaAmigos');
let amigo = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

function mostrarMensaje(mensaje) {
    //cambiar el color de la fuente y el mensaje en el input
    document.getElementById('amigo').style.color = 'red';
    document.getElementById('amigo').value = mensaje;
    //boder rojo en el input
    document.getElementById('amigo').style.border = '3px solid red';
    //limpiar al dar click en el input
    document.getElementById('amigo').addEventListener('click', function() {
        //quitar el borde
        document.getElementById('amigo').style.border = 'none';
        //limpiar el mensaje en el input
        document.getElementById('amigo').value = "";
        //cambiar el color de la fuente y el mensaje en el input
        document.getElementById('amigo').style.color = 'black';
    });
}

function agregarAmigo() {
    let nombreAmigo = amigo;

     //nopermitir que ingrse el mensaje de error que sale en el input
     if (document.getElementById('amigo').value == "El amigo ya fue agregado" || document.getElementById('amigo').value == "El nombre no puede contener caracteres especiales" || document.getElementById('amigo').value == "El nombre no puede terminar con un espacio" || document.getElementById('amigo').value == "El nombre no puede contener numeros" || document.getElementById('amigo').value == "El campo no puede estar vacio") {
        document.getElementById('amigo').value = "";
    }
//validar si el nombre que va a ingresar ya esta en el array y poner mensaje
    if (amigos.includes(document.getElementById('amigo').value)) {
        mostrarMensaje("El amigo ya fue agregado");
        return false;
    } 
    //validar si el nombre de amigo ingresado tiene caracteres especiales y enviar una alerta
    if (document.getElementById('amigo').value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        mostrarMensaje("El nombre no puede contener caracteres especiales");
        return false;
    }
//validar si el nombre ingresado tiene Espacios sin tener otro dato despues del espacio y enviar una alerta
    if (document.getElementById('amigo').value.match(/\s$/)) {
        mostrarMensaje("El nombre no puede terminar con un espacio");
        return false;
    }
        //validar si el nombre de amigo ingresado tiene numeros y enviar una alerta
    if (document.getElementById('amigo').value.match(/\d/)) {
        mostrarMensaje("El nombre no puede contener numeros");
        return false;
    }
    //validar si el campo input esta vacio y enviar una alerta
    if (document.getElementById('amigo').value == "") {
        mostrarMensaje("El campo no puede estar vacio");
        return false;
    }
    //añadir el nombre del amigo al array
    amigos.push(document.getElementById('amigo').value);
    //despues de añadir el nombre del amigo al array, limpiar el campo input
    document.getElementById('amigo').value = "";  
    mostrarAmigos();
}

function mostrarAmigos() {
    //Utilizar document.getElementById('id') para seleccionar la lista donde se van a agregar los amigos
    let lista = document.getElementById('listaAmigos');
    //Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados
    lista.innerHTML = "";
    //Bucle for para recorre el array y agregar cada nombre a un elemento <li> dentro del HTML
    for (let i = 0; i < amigos.length; i++) {
        //Crear un elemento <li> y asignarle el nombre del amigo en la posicion i
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        //Agregar el elemento <li> a la lista
        lista.appendChild(elemento);
    }  
}

function sortearAmigo() {
    if (amigos.length < 2) { // Comprueba que array 'amigos' tenga almenos dos nombres para sortear
        alert('Para sortear al amigo secreto se necesitan al menos dos nombres.')
    } else {
        modificaElementoID(listaAmigos, ''); // Limpia lista 'listaAmigos'
        modificaElementoID(resultado, `El amigo secreto sorteado es: ${generaSorteo(amigos)}`); // Publica nombre sorteado en 'resultado'
        
    }
}

function agregaAmigoLista(nombre, array) {
    array.push(nombre);
}

function modificaElementoID(elementoID, texto) {
    elementoID.value = texto;
    elementoID.innerHTML = texto;
}

function creaListaAmigos(elementoID, array) {
    modificaElementoID(elementoID, '');
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.textContent = array[i];
        elementoID.appendChild(li);
    }
}

function generaSorteo(array) {
    nombreSorteado = Math.floor(Math.random() * array.length);
    return array[nombreSorteado];
}

function reiniciar() {
    amigos = [];
    amigosSorteados = [];

    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').textContent = "";
}