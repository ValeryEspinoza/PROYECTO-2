

const correoI=document.getElementById("correoI")
const passI = document.getElementById("passI")
const btnIngresar= document.getElementById("btnIngresar")
const link = document.getElementById("link")




btnIngresar.addEventListener("click",function () {

    let listRegistro= JSON.parse(localStorage.getItem("task")) 
    let men = document.getElementById("men")

    let modal= document.createElement("p")
        for (let index = 0; index < listRegistro.length; index++) {
            if (listRegistro[index].correo ===  correoI.value && listRegistro[index].pass === passI.value) {
                
                let modal= document.createElement("p")
                modal.innerHTML="¡Ingreso Exitoso!"
                men.appendChild(modal)

                this.after(window.location.href="http://127.0.0.1:5500/PROYECTO-2/src/index.html")
                
            }else{
                
                modal.innerHTML="Contraseña o Correo Inconrrectos. Puedes intentar de nuevo o volver a registrarte"
                men.appendChild(modal)
            }
        }
})

