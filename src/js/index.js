


const fecha = document.getElementById("fechaInput")
const ingresarTarea = document.getElementById("tareaInput")
const contenedorEventos= document.getElementById("divEventos")
const contenedorTareas = document.getElementById("divTareas")
/*const contenedorTarea= document.getElementById("contenedorTarea")*/

const btnGuardar= document.getElementById("btnGuardar")
const btnDelete = document.getElementById("btnEliminar")
const btnEdit= document.getElementById("btnEditar")

const inputSelec= document.getElementById("inputSelec")
let listaTareas=[]
let listaEventos=[]




btnGuardar.addEventListener("click",function () {

    let sumaDateTask = fecha. value+ " " + ingresarTarea.value

    
    
    if (inputSelec.value == "tareas" ) {
        let datoInput = sumaDateTask
    let etiquetaP= document.createElement("p")
    etiquetaP.innerHTML=datoInput
    contenedorTareas.appendChild(etiquetaP)
    listaTareas.push(datoInput)
    localStorage.setItem("listTareas", JSON.stringify(listaTareas))
    
    let etiquetaButton = document.createElement("button")
    etiquetaButton.innerHTML="Eliminar"
    contenedorTareas.appendChild(etiquetaButton)
    
    let etiquetaButton2 = document.createElement("button")
    etiquetaButton2.innerHTML="Editar"
    contenedorTareas.appendChild(etiquetaButton2)
    
    btnDelete.addEventListener("click",function () {
        
    })    
    
    }

    if (inputSelec.value== "eventos") {
        let datoInput = sumaDateTask
    let etiquetaP= document.createElement("p")
    etiquetaP.innerHTML=datoInput
    contenedorEventos.appendChild(etiquetaP)
    listaEventos.push(datoInput)
    localStorage.setItem("ListEvento", JSON.stringify(listaEventos))

    let etiquetaButton = document.createElement("button")
    etiquetaButton.innerHTML="Eliminar"
    contenedorEventos.appendChild(etiquetaButton)
    
    let etiquetaButton2 = document.createElement("button")
    etiquetaButton2.innerHTML="Editar"
    contenedorEventos.appendChild(etiquetaButton2)


    
    }

    


    
    

} )

