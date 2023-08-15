function promedio(primerNota, segundaNota, tercerNota) {
    const sumaNotas = primerNota + segundaNota + tercerNota
    const promedioFinal = sumaNotas / 3
    return promedioFinal
}

// Entrada de datos
const primerNota = parseInt(prompt('Ingrese la primer nota (1-12)'))
const segundaNota = parseInt(prompt('Ingrese la segunda nota (1-12)'))
const tercerNota = parseInt(prompt('Ingrese la tercer nota (1-12)'))

// Procesamiento de los datos
const resultado = promedio(primerNota, segundaNota, tercerNota)

// Salida de la informacion
if (resultado >= 6) {
    alert('Aprobaste! tu promedio final es ' + resultado)
} else {
    alert('Reprobaste, tu promedio final es ' + resultado)
}
