


const correo = document.getElementById("correo")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const btnResgistro= document.getElementById("btnRegistrar")
const pass = document.getElementById("pass")

let listaUsuarios= JSON.parse(localStorage.getItem("task"))||[]





btnResgistro.addEventListener("click",function () {
    

    let men = document.getElementById("men")
    let registrarUsuario= {
        correo: correo.value,
        nombre: nombre.value,
        apellido: apellido.value,
        pass: pass.value
    }
    let task = registrarUsuario

    listaUsuarios.push(task)
    console.log(listaUsuarios)
    
    let modal= document.createElement("p")
    modal.innerHTML="¡Registro Exitoso! Ya puedes ingresar"
    men.appendChild(modal)

    console.log(55);
    
    localStorage.setItem("task", JSON.stringify(listaUsuarios))

    
})

