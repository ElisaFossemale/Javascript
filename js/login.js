
// login de usuario 
const formularioIngreso = document.getElementById("formularioIngreso");

formularioIngreso.addEventListener("submit", (e)=>{
    e.preventDefault();
    let usuario = document.getElementById("exampleInputEmail1").value;
    let  pass = document.getElementById("exampleInputPassword1").value;
    const passValidado = 1234;
    
    
    for(let i = 0; i<2; i++){
        
        (pass == passValidado ? swal ( "Usuario Correcto" ) : swal ( "Contraseña Incorrecta" ) );
        
       
          
        
        
      

   //captura de datos con metodos JSON
 const usJson = JSON.stringify(usuario);
 const passJson = JSON.stringify(pass);
 localStorage.setItem("datos", usJson);
 localStorage.setItem("pass", passJson);
}})