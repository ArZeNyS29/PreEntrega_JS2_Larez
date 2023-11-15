function carga_notas(alumno) {
    let nota1, nota2;
    do {
        nota1 = parseFloat(prompt(`Ingrese la primera nota para ${alumno.name}:`));
        if (nota1 < 0 || nota1 > 10) {
        alert("ERROR. Las notas estan comprendidas desde el 0 al 10.");
        }
    } while (nota1 < 0 || nota1 > 10);

    do {
        nota2 = parseFloat(prompt(`Ingrese la segunda nota para ${alumno.name}:`));
        if (nota2 < 0 || nota2 > 10) {
        alert("ERROR. Las notas estan comprendidas desde el 0 al 10.");
        }
    } while (nota2 < 0 || nota2 > 10);
    const promedio = (nota1 + nota2) / 2;
    alumno.nt1 = nota1;
    alumno.nt2 = nota2;
    alumno.prom = promedio;
    alumno.estado = promedio >= 7 ? "PROMOCIONA" : promedio < 4 ? "RECURSA" : "";
}

function ordenar(lista) {
    return lista.sort((a, b) => b.prom - a.prom);
}


function main(){
    let alumProm="";
    const listaAlumnos=[
        {name: "Juan",nt1: 0, nt2: 0, prom:0},
        {name: "Pedro",nt1: 0, nt2: 0, prom:0},
        {name: "Maria",nt1: 0, nt2: 0, prom:0},
        {name: "Flor",nt1: 0, nt2: 0, prom:0}
    ]
    for (const alumno of listaAlumnos) {
        carga_notas(alumno);
    }
    const top= ordenar(listaAlumnos);
    for (const alumno of top) {
        alumProm += `${alumno.name}: ${alumno.prom} ${alumno.estado}\n`;
    }
    alert(`Estos son los promedios de los alumnos:\n\n${alumProm}`)
}

main()