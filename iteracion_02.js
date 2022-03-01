const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]

let isAproved = Boolean;
let message = "";

for (let i = 0; i < alumns.length; i++) {
    if ((alumns[i].T1 && alumns[i].T2) || (alumns[i].T3 && alumns[i].T2) || (alumns[i].T1 && alumns[i].T3)) {
        isAproved = true
    } else { isAproved = false }
    if (isAproved === true) {
        message = "aprobado."
    } else { message = "suspenso." }

    console.log("El alumno " + alumns[i].name + " esta " + message)

}