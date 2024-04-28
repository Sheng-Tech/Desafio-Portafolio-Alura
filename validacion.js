//Haz tú validación en javascript acá
    //Boton de submit
document.getElementById('contacto').addEventListener('input', function () {
    const nombre = document.getElementById('nombreContacto').value;
    const correo = document.getElementById("emailContacto").value;
    const asunto = document.getElementById("asuntoContacto").value;
    const mensaje = document.getElementById("mensajeContacto").value;

    const botonSubmit = document.querySelector('button[type="submit"]');

    if (nombre && correo && asunto && mensaje) {
        botonSubmit.removeAttribute('disabled');
    } else {
        botonSubmit.setAttribute('disabled', true);
    }
});


document.getElementById('contacto').addEventListener('submit', function (e){
    
    e.preventDefault();
    //Evitar la recarga de la página al enviar formulario

    const nombre = document.getElementById('nombreContacto').value;
    const correo = document.getElementById("emailContacto").value;
    const asunto = document.getElementById("asuntoContacto").value;
    const mensaje = document.getElementById("mensajeContacto").value;

    console.log(nombre);
    console.log(correo);
    console.log(asunto);
    console.log(mensaje);
    console.log(nombre.length);

    //Validación de campos
    //Nombre
    const nameValue = nombre.trim(); //Eliminar espacios vacíos al inicio y final.
    console.log (nombre);
    if (nameValue === '') {
        alert('El nombre es obligatorio, no debe estar vacío');
    } else if (nameValue.length < 1 || nameValue.length > 50) {
        alert('El nombre no puede ser superior a 50 caracteres');
    } else {
        //El nombre es válido para continuar
    }

    //Correo electrónico
    const emailValue = correo.trim(); //Eliminar espacios vacíos al inicio y final.
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log (correo);
    console.log (emailRegex);
    if  (!emailRegex.test(emailValue)) {
        alert('Debe ingresar un correo válido (ejemplo: texto@correo.com)')
    } else {
        //El correo es válido para continuar.
    }

    //Asunto
    const asuntoValue = asunto.trim(); //Eliminar espacios vacíos al inicio y final.
    console.log (asunto);
    if (asuntoValue === '') {
        alert('El asunto es obligatorio, no debe estar vacío');
    } else if (asuntoValue.length < 1 || asuntoValue.length > 50) {
        alert('El asunto no puede ser superior a 50 caracteres');
    } else {
        //El asunto es válido para continuar
    }

    //Mensaje
    const mensajeValue = mensaje.trim(); //Eliminar espacios vacíos al inicio y final.
    console.log (mensaje);
    if (mensajeValue === '') {
        alert('El mensaje es obligatorio, no debe estar vacío');
    } else if (mensajeValue.length < 1 || mensajeValue.length > 300) {
        alert('El asunto no puede ser superior a 300 caracteres');
    } else {
        //El mensaje es válido para continuar
    }

});
