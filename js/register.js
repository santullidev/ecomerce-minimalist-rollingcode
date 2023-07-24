// cambio de registro a inicio de sesion
const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".registro");
const formLogin = document.querySelector(".login");
// oculta o hace visible el container
btnSignIn.addEventListener("click", e  =>{
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnSignUp.addEventListener("click", e  =>{
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
})
// ---------------se agrega el admin para poder ingresar---------------
const adminData = {
  usuario: 'admin123',
  contraseña: 'contraseña123',
  nombre: 'Admin Nombre',
  rol: 'administrador'
};
localStorage.setItem('admin', JSON.stringify(adminData));

//-------------------------registro-------------------------

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-register');

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      const usernamer = document.getElementById('username-r').value;
      const passwordr = document.getElementById('password-r').value;
      const emailr = document.getElementById('email-r').value;
      // Creamos un objeto con la información del usuario
      const user = {
          usernamer: usernamer,
          passwordr: passwordr,
          emailr: emailr
      };
      localStorage.setItem('user', JSON.stringify(user));
      //ALERTA SWEET
      Swal.fire({
        icon: 'success',
        title: 'ENHORABUENA!',
        text: 'TE REGISTRASTE CORRECTAMENTE'
      })
      formRegister.classList.add("hide");
      formLogin.classList.remove("hide");

  });
});

//-------------------------login-------------------------
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-login');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const usuarioIngresado = document.getElementById('username-l').value;
    const contraseñaIngresada = document.getElementById('password-l').value;
    const usuarioRegistrado = localStorage.getItem('user');
    const adminRegistrado = localStorage.getItem('admin');
    if (usuarioRegistrado || adminRegistrado) {
      const usuarioObjeto = usuarioRegistrado ? JSON.parse(usuarioRegistrado) : null;
      const adminObjeto = adminRegistrado ? JSON.parse(adminRegistrado) : null;
      // verificacion de los valores
      if (usuarioObjeto && usuarioIngresado === usuarioObjeto.usernamer && contraseñaIngresada === usuarioObjeto.passwordr) {
        alert('Inicio de sesión exitoso!');
        window.location.href = 'pagina-principal.html';
      }
      // Verificamos si los valores del admin
      else if (adminObjeto && usuarioIngresado === adminObjeto.usuario && contraseñaIngresada === adminObjeto.contraseña) {
        alert('Inicio de sesión exitoso como admin!');
        window.location.href = 'dashboard.html';
      } else {
        // si no son correctos muestra esto
        //ALERTA SWEET
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'USTED NO ESTA REGISTRADO',
        })
      }
    }
  });
});