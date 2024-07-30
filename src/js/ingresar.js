

const correoI=document.getElementById("correoI")
const passI = document.getElementById("passI")
const btnIngresar= document.getElementById("btnIngresar")
const link = document.getElementById("link")


btnIngresar.addEventListener("click",function () {

    let listRegistro= JSON.parse(localStorage.getItem("task")) 

    
        for (let index = 0; index < listRegistro.length; index++) {
            if (listRegistro[index].correo ===  correoI.value && listRegistro[index].pass === passI.value) {
                
                window.location.href="http://127.0.0.1:5500/PROYECTO-2/src/index.html";
                
            }else{
                console.log("Datos Incorrectos")
            }
        }
})

