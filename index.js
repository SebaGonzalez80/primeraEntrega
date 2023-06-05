let nombreUsuario = prompt("ingrese su nombre:");
let apellidoUsuario = prompt("ingrese su Apellido:");
console.log(nombreUsuario + " " + apellidoUsuario);
document.write("Estimado/a: " + nombreUsuario + " " + apellidoUsuario + " .=>");

let saludoIn = prompt("Bienvenido a un lugar de Encanto, si desea alojarse indique: SI o SALIR");

while (saludoIn != "SI" && saludoIn != "SALIR") {
    alert("Por favor ingresa SI o SALIR")
    saludoIn = prompt("Bienvenido a un lugar de Encanto, si desea alojarse indique: SI o SALIR")
}

if (saludoIn == "SI") {
    alert("Estimado/a continua con las opciones");

    let nombreHospedaje = prompt("En que cabaña desea alojarse, indique: \n [1]- La Esperanza \n [2]-La Paz \n [3]- La Escondida \n [4] SALIR ");

    let nombreHospedajeParseado = parseInt(nombreHospedaje)
    switch (nombreHospedajeParseado) {
        case 1:
            alert("Estimado/a " + nombreUsuario + " elijio la opcion 1 - La Esperanza")
            break;
        case 2:
            alert("Estimado/a " + nombreUsuario + " elijio la opcion 2- La Paz")
            break;
        case 3:
            alert("Estimado/a " + nombreUsuario + " elijio la opcion 3- La Escondida")
            break;
        case 4:
            alert("Estimado/a " + nombreUsuario + " elijio la opcion SALIR")
            break;

        default:
            alert("Ingreso una opcion invalida.");
            break;
    }
    
let menuHospedaje = prompt("Ingrese la opción: 1-Dos noches 2- Cinco noches 3-Siete Noches");
let diasAlojamiento = parseInt(prompt("Ingrese su opción en números:\n 2, \n 5, \n 7,"));
let costoDia = 2500
let correoElectronico = parseInt(prompt("Introduce tu correo electronico"));
let resultado;

function dosNoches(diasAlojamiento, costoDia){
	return diasAlojamiento * costoDia;
}

function cincoNoches(diasAlojamiento, costoDia){
	return diasAlojamiento * (costoDia - (costoDia * 0.15));
}

function sieteNoches(diasAlojamiento, costoDia){
	return diasAlojamiento * (costoDia - (costoDia * 0.20));
}

switch (menuHospedaje){
	case "1":
		resultado = dosNoches(diasAlojamiento,costoDia);
		console.log ("El valor de la estadia es: " + resultado + " lo enviaremos a tu @mail. =>" + correoElectronico);
        document.write("El valor de la estadia es: " + resultado + " lo enviaremos a tu @mail. =>" + correoElectronico);
		break;

	case "2":
		resultado = cincoNoches(diasAlojamiento,costoDia);
        console.log ("El valor de la estadia es: " + resultado + " lo enviaremos a tu @mail " + correoElectronico);
		document.write("El valor de la estadia es: " + resultado + " lo enviaremos a tu @mail " + correoElectronico);
		break;

	case "3":
		resultado = sieteNoches(diasAlojamiento,costoDia);
        console.log ("El valor de la estadia es: " + resultado + " lo enviaremos a tu @mail " + correoElectronico);
		document.write("El valor de la estadia es: " + resultado + " lo enviaremos a tu @mail " + correoElectronico);
		break;

		default:
		alert("La opción especificada no es correcta.");
		break;
}
alert(" Muchas gracias por elegirnos, le enviaremos a su correo el presupuesto.");
}else {
    alert("Que tenga buenos días, lo esperamos nuevamente");
}
