

var test = document.getElementById("#teste")
window.onload=function(){
    
    test.addEventListener("click",teste)

    // test.addEventListener("click",()=>{ 
    //     alert("teste")
    // })
  }
console.log(test)









// function ExibirPerfil() {
//     document.getElementById("personal-data").style.display = "block";
//     document.getElementById("form-title").style.display = "block";
//     document.getElementById("evento-info").style.display = "none";
//     document.getElementById("event-title").style.display = "none";
// }

// function ExibirEvento() {
//     document.getElementById("form-title").style.display = "none";
//     document.getElementById("personal-data").style.display = "none";
//     document.getElementById("evento-info").style.display = "block";
//     document.getElementById("event-title").style.display = "block";
// }
// function ExibirOcultaPerfil(){
//     var display = document.getElementById(personal-data).style.display;
//     if(display==none){
//     document.getElementById("personal-data").style.display = "block";
//     document.getElementById("form-title").style.display = "block";
//     document.getElementById("evento-info").style.display = "none";
//     document.getElementById("event-title").style.display = "none";
//     }
// }
// function ExibirOcultaEvento(){
//     var display = document.getElementById(evento-info).style.display;
//     if(display==none){
//         document.getElementById("form-title").style.display = "none";
//         document.getElementById("personal-data").style.display = "none";
//         document.getElementById("evento-info").style.display = "block";
//         document.getElementById("event-title").style.display = "block";
//     }
// }