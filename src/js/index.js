


const fecha = document.getElementById("fechaInput")
const ingresarTarea = document.getElementById("tareaInput")
const contenedorEventos= document.getElementById("divEventos")
const contenedorTareas = document.getElementById("divTareas")
/*const contenedorCompletado= document.getElementById("contenedorTarea")*/

const btnDelet= document.getElementById("btnDelete")
const btnGuardar= document.getElementById("btnGuardar")

const inputSelec= document.getElementById("inputSelec")
const inputPrioridad= document.getElementById("prioridadSelect")


let listaTareas=JSON.parse(localStorage.getItem("listTask"))||[]
let listaEventos=JSON.parse(localStorage.getItem("listEvent"))||[]

 

btnGuardar.addEventListener("click", function () {
    
        if (inputSelec.value == "eventos") {
        let sumaEventDate = fecha.value +  " " + ingresarTarea.value
        let datoInputEvent = sumaEventDate

        let etiquetaEvent= document.createElement("p")
        etiquetaEvent.innerHTML=datoInputEvent
        contenedorEventos.appendChild(etiquetaEvent)
        console.log(listaEventos);
        listaEventos.push(datoInputEvent)
        
       
        let buttonEvent = document.createElement("button")
        buttonEvent.innerHTML=buttonEvent
        buttonEvent.innerHTML="Eliminar"
        contenedorEventos.appendChild(buttonEvent)
        
        
        let eventButtonEdit = document.createElement("button")
        eventButtonEdit.innerHTML="Editar"
        contenedorEventos.appendChild(eventButtonEdit)

        

        let inputRadioEvent= document.createElement("input")
            inputRadioEvent.setAttribute("type", "checkbox")
            etiquetaEvent.appendChild(inputRadioEvent)

        localStorage.setItem("listEvent",JSON.stringify(listaEventos))
            

            inputRadioEvent.addEventListener("click", function () {
            
         
         
                if (inputRadioEvent.checked=== true) {
                    
                
                    etiquetaEvent.style.textDecoration="line-through";
                

                }else{
                    etiquetaEvent.style.textDecoration="none";
                }

        

            })
            
            


        buttonEvent.addEventListener("click", function() {
            let valoresEventDelete= JSON.parse(localStorage.getItem("listEvent"))||[] 
            const listaEventActualizada= valoresEventDelete.filter(tareaEvent=> tareaEvent != etiquetaEvent.textContent)
            localStorage.setItem("listEvent", JSON.stringify(listaEventActualizada))
            
            etiquetaEvent.remove()
            buttonEvent.remove()
            eventButtonEdit.remove()
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


            let etiquetaEventAnterior= etiquetaEvent.textContent
            

            if (applyButton.addEventListener("click", function () {
                etiquetaEvent.contentEditable = false;
                etiquetaEvent.style.backgroundColor= "none";
                eventButtonEdit.style.display="block";

            
            let valorAnterior= JSON.parse(localStorage.getItem("listEvent"))||[]

                for (let index = 0; index < valorAnterior.length; index++) {
                
                    if (valorAnterior[index] == etiquetaEventAnterior) {
                        
                valorAnterior[index] = etiquetaEvent.textContent
                
                }
                    
                }

                localStorage.setItem("listEvent", JSON.stringify(valorAnterior))

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
        inputRadioTask.setAttribute("type", "checkbox")
        etiquetaTarea.appendChild(inputRadioTask)

        inputRadioTask.addEventListener("click", function () {
            
         
         
            if (inputRadioTask.checked=== true) {
                
             
                etiquetaTarea.style.textDecoration="line-through";
             

        }else{
                etiquetaTarea.style.textDecoration="none";
        }
        })


        tareaButtonDelete.addEventListener("click", function() {
            let valoresTaskDelete= JSON.parse(localStorage.getItem("listTask"))||[] 
            const listaTaskActualizada= valoresTaskDelete.filter(task => task != etiquetaTarea.textContent)
            localStorage.setItem("listTask", JSON.stringify(listaTaskActualizada))

            etiquetaTarea.remove()
            tareaButtonDelete.remove()
            tareaButtonEdit.remove()  
            inputRadioTask.remove()     
        })


        tareaButtonEdit.addEventListener("click", function () {
            tareaButtonEdit.style.display="none"

            let applyButtonTask= document.createElement("button");
            contenedorTareas.appendChild(applyButtonTask);
            applyButtonTask.innerHTML="Guardar Cambio";
            etiquetaTarea.contentEditable = true;      
            etiquetaTarea.style.backgroundColor="gray";
            etiquetaTarea.styleColor="white"


            let etiquetaTareaAnterior= etiquetaTarea.textContent
            

            if (applyButtonTask.addEventListener("click", function () {
                etiquetaTarea.contentEditable = false;
                etiquetaTarea.style.backgroundColor= "none";
                tareaButtonEdit.style.display="block";

            
            let tareaValorAnterior= JSON.parse(localStorage.getItem("listTask"))||[]

                for (let index = 0; index < tareaValorAnterior.length; index++) {
                
                    if (tareaValorAnterior[index] == etiquetaTareaAnterior) {
                        
                tareaValorAnterior[index] = etiquetaTarea.textContent
                
                }
                    
                
                }

                localStorage.setItem("listTask", JSON.stringify(tareaValorAnterior))
                
                

            this.after(applyButtonTask.remove())
            })) 

            {}})
        

        }

    

} )



function cargar(){

    let listaEventOnload = JSON.parse(localStorage.getItem("listEvent"))||[]
    let listaTaskOnload = JSON.parse(localStorage.getItem("listTask"))||[]
    
    let divNuevoTask= document.createElement("div")
    let divNuevoEventos= document.createElement("div")

    for (let index = 0; index < listaEventOnload .length; index++) {
        
        let elementoP= document.createElement("p")
        elementoP.innerHTML = listaEventOnload[index]
        divNuevoEventos.appendChild(elementoP)
        
        let btnDeleteEvent = document.createElement("button")
        btnDeleteEvent.innerHTML="Eliminar"
        divNuevoEventos.appendChild(btnDeleteEvent)
        
       let btnEventEditOnload = document.createElement("button")
       btnEventEditOnload.innerHTML="Editar"
       divNuevoEventos.appendChild(btnEventEditOnload)

        let inputEventOnload= document.createElement("input")
        inputEventOnload.setAttribute("type", "checkbox")
        elementoP.appendChild(inputEventOnload)
       contenedorEventos.appendChild(divNuevoEventos)

        

       


            

            inputEventOnload.addEventListener("click", function () {

                if (inputEventOnload.checked === true) {

                    elementoP.style.textDecoration="line-through";

                }else{

                    elementoP.style.textDecoration="none";
                }
            })
            
            


        btnDeleteEvent.addEventListener("click", function() {
            let valoresEventDOnload= JSON.parse(localStorage.getItem("listEvent"))||[] 
            const listaEventActualizadaOnload= valoresEventDOnload.filter(tareaEvent=> tareaEvent != elementoP.textContent)
            localStorage.setItem("listEvent", JSON.stringify(listaEventActualizadaOnload))
            
            elementoP.remove()
            btnDeleteEvent.remove()
            btnEventEditOnload.remove()
            inputEventOnload.remove()
            
        
        })

        btnEventEditOnload.addEventListener("click", function () {
            btnEventEditOnload.style.display="none"
            let btnApply = document.createElement("button");
            divNuevoEventos.appendChild(btnApply);
            btnApply.innerHTML="Guardar";
            elementoP.contentEditable = true;      
            elementoP.style.backgroundColor="gray";
            elementoP.styleColor="white"


            let eventAnteriorOnload= elementoP.textContent
            

            if (btnApply.addEventListener("click", function () {
                elementoP.contentEditable = false;
                elementoP.style.backgroundColor= "none";
                btnEventEditOnload.style.display="block";

            
            let valorAnteriorLista= JSON.parse(localStorage.getItem("listEvent"))||[]

                for (let index = 0; index < valorAnteriorLista.length; index++) {
                
                    if (valorAnteriorLista[index] == eventAnteriorOnload) {
                        
                        valorAnteriorLista[index] = elementoP.textContent
                
                }
                    
                }

                localStorage.setItem("listEvent", JSON.stringify(valorAnteriorLista))

            this.after(btnApply.remove())
            })) 

            {}})
    }

    for (let index = 0; index < listaTaskOnload.length; index++) {

        let etiquetaTareaP= document.createElement("p")
        etiquetaTareaP.innerHTML = listaTaskOnload[index]
        divNuevoTask.appendChild(etiquetaTareaP)

        let btnDeleteTask = document.createElement("button")
        btnDeleteTask.innerHTML="Eliminar"
        divNuevoTask.appendChild(btnDeleteTask)
        
        let btnTareaEdit = document.createElement("button")
        btnTareaEdit.innerHTML="Editar"
        divNuevoTask.appendChild(btnTareaEdit)

        
        let btnInputTask= document.createElement("input")
        btnInputTask.setAttribute("type", "checkbox")
        etiquetaTareaP.appendChild(btnInputTask)

        contenedorTareas.appendChild(divNuevoTask)

        btnInputTask.addEventListener("click", function () {

            if ( btnInputTask.checked=== true) {
                etiquetaTareaP.style.textDecoration="line-through";
            }else{
                etiquetaTareaP.style.textDecoration="none";
            }
        })


        btnDeleteTask.addEventListener("click", function() {
            let valoresTaskOnload= JSON.parse(localStorage.getItem("listTask"))||[] 
            const listaTaskActualizadaOnload= valoresTaskOnload.filter(task => task != etiquetaTareaP.textContent)
            localStorage.setItem("listTask", JSON.stringify(listaTaskActualizadaOnload))

            etiquetaTareaP.remove()
            btnDeleteTask.remove()
            btnTareaEdit.remove()  
            btnInputTask.remove()     
        })


        btnTareaEdit.addEventListener("click", function () {
            btnTareaEdit.style.display="none"

            let btnApplyTask= document.createElement("button");
            divNuevoTask.appendChild(btnApplyTask);
            btnApplyTask.innerHTML="Guardar";
            etiquetaTareaP.contentEditable = true;      
            etiquetaTareaP.style.backgroundColor="gray";
            etiquetaTareaP.styleColor="white"


            let etiquetaTareaAnteriorOnload= etiquetaTareaP.textContent
            

            if (btnApplyTask.addEventListener("click", function () {
                etiquetaTareaP.contentEditable = false;
                etiquetaTareaP.style.backgroundColor= "none";
                btnTareaEdit.style.display="block";

            
                let listaValorAnteriorTask= JSON.parse(localStorage.getItem("listTask"))||[]

                for (let index = 0; index < listaValorAnteriorTask.length; index++) {
                
                    if (listaValorAnteriorTask[index] == etiquetaTareaAnteriorOnload) {
                        
                    listaValorAnteriorTask[index] = etiquetaTareaP.textContent
                
                }
                    
                }

                localStorage.setItem("listTask", JSON.stringify(listaValorAnteriorTask))

                this.after(btnApplyTask.remove())

            })) 

            {}})
        
        
    }
}





