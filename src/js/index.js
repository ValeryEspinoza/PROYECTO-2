


const fecha = document.getElementById("fechaInput")
const ingresarTarea = document.getElementById("tareaInput")
const contenedorEventos= document.getElementById("divEventos")
const contenedorTareas = document.getElementById("divTareas")
const contenedorCompletado= document.getElementById("contenedorTarea")

const btnDelet= document.getElementById("btnDelete")
const btnGuardar= document.getElementById("btnGuardar")

const inputSelec= document.getElementById("inputSelec")
const inputPrioridad= document.getElementById("prioridadSelect")


let listaTareas=JSON.parse(localStorage.getItem("listTask"))||[]
let listaEventos= JSON.parse(localStorage.getItem("listEvent"))||[]




btnGuardar.addEventListener("click",function () {
    
    if (inputSelec.value == "eventos" ) {
        let sumaEventDate = fecha.value +  " " + ingresarTarea.value
        let datoInputEvent = sumaEventDate
        
    let etiquetaEvent= document.createElement("p")
    etiquetaEvent.innerHTML=datoInputEvent
    contenedorEventos.appendChild(etiquetaEvent)
    listaEventos.push(datoInputEvent)
    
    let buttonEvent = document.createElement("button")
    buttonEvent.innerHTML="Eliminar"
    contenedorEventos.appendChild(buttonEvent)
    
    let eventButtonEdit = document.createElement("button")
    eventButtonEdit.innerHTML="Editar"
    contenedorEventos.appendChild(eventButtonEdit)
    
    let inputRadioEvent= document.createElement("input")
        inputRadioEvent.setAttribute("type", "radio")
        contenedorEventos.appendChild(inputRadioEvent)

    localStorage.setItem("listEvent",JSON.stringify(listaEventos))

    buttonEvent.addEventListener("click", function() {
        let valoresEventDelete= JSON.parse(localStorage.getItem("listEvent"))||[] 
        const listaEventActualizada= valoresEventDelete.filter(tareaEvent=> tareaEvent != etiquetaEvent.textContent)PROYECTGI
        localStorage.setItem("listEvent", JSON.stringify(listaEventActualizada))
        
        etiquetaEvent.remove()
        buttonEvent.remove()
        eventButtonEdit.remove()
        inputRadio.remove()
        inputRadioEvent.remove()
       
    })

    eventButtonEdit.addEventListener("click", function () {
        eventButtonEdit.style.display="none"


        let applyButton= document.createElement("button");
        contenedorEventos.appendChild(applyButton);
        applyButton.innerHTML="Guardar Cambio";
        etiquetaEvent.contentEditable = true;      
        etiquetaEvent.style.backgroundColor="gray";
        etiquetaEvent.styleColor="white"

        if (applyButton.addEventListener("click", function () {
            etiquetaEvent.contentEditable = false;
            etiquetaEvent.style.backgroundColor= "none";
            eventButtonEdit.style.display="block";
            
            this.after(applyButton.remove())
        })) 

        {}})
    

   
    }

  


    if (inputSelec.value == "tareas") {
    
    let sumaDateTask = ingresarTarea.value  + "- " + inputPrioridad.value
    let datoInputTask = sumaDateTask
    let etiquetaTarea= document.createElement("p")
    etiquetaTarea.innerHTML=datoInputTask
    contenedorTareas.appendChild(etiquetaTarea)
    listaTareas.push(datoInputTask)
    localStorage.setItem("listTask",JSON.stringify(listaTareas) )

    let tareaButtonDelete = document.createElement("button")
    tareaButtonDelete.innerHTML=btnDelet
    tareaButtonDelete.innerHTML="Eliminar"
    contenedorTareas.appendChild(tareaButtonDelete)
    
    let tareaButtonEdit = document.createElement("button")
    tareaButtonEdit.innerHTML="Editar"
    contenedorTareas.appendChild(tareaButtonEdit)

    
    let inputRadioTask= document.createElement("input")
    inputRadioTask.setAttribute("type", "radio")
    contenedorTareas.appendChild(inputRadioTask)

    
    tareaButtonDelete.addEventListener("click", function() {
        let valoresTaskDelete= JSON.parse(localStorage.getItem("listTask"))||[] 
        const listaTaskActualizada= valoresTaskDelete.filter(task => task != etiquetaTarea.textContent)
        localStorage.setItem("listTask", JSON.stringify(listaTaskActualizada))

        etiquetaTarea.remove()
        tareaButtonDelete.remove()
        tareaButtonEdit.remove()  
        inputRadioTask.remove()     
    })
    }


    

    
} )


