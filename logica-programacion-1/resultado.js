const mostrarResultados = (resultados) => {
    console.log(`${resultados.mensajeRepetidos}`);
    console.log(`Mayor a menor : Mayor: ${resultados.mayor} | Medio: ${resultados.medio} | Menor: ${resultados.menor}`);
    console.log(`Menor a mayor: Menor : ${resultados.menor} | Medio: ${resultados.medio} | Mayor: ${resultados.mayor}`);
}


module.exports = {mostrarResultados};