const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,11}$/ // 7 a 14 numeros.
}

const campos = {
    usuario:false,
    nombre:false,
    password:false,
    email:false,
    phone:false
}


const validaForm = (e)=>{
    switch (e.target.name){
        case "usuario":
            validarCampo(expresiones.usuario, e.target,'usuario');
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "password":
           validarCampo(expresiones.password, e.target, 'password');
           validarPassword2()
        break;
        case "password2":
            validarPassword2();
        break;
        case "email":
            validarCampo(expresiones.correo, e.target, 'email');
        break;
        case "phone":
            validarCampo(expresiones.telefono, e.target, 'phone')
        break;

    };
}

const validarCampo = (expresion, input, campo) => {
        if(expresion.test(input.value)){
            document.getElementById(`group__${campo}`).classList.remove('form__group-incorrecto');
            document.getElementById(`group__${campo}`).classList.add('form__group-correcto');   
            document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#group__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#group__${campo} .form-alert__error`).classList.remove('form-alert__error-activo');
            campos[campo] = true;
        }else{
            document.getElementById(`group__${campo}`).classList.add('form__group-incorrecto');
            document.getElementById(`group__${campo}`).classList.remove('form__group-correcto');
            document.querySelector(`#group__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#group__${campo} .form-alert__error`).classList.add('form-alert__error-activo');
            campos[campo] = false;
        }
}

const validarPassword2 = ()=>{
    const inputPassword = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword.value !== inputPassword2.value){
        document.getElementById(`group__password2`).classList.add('form__group-incorrecto');
        document.getElementById(`group__password2`).classList.remove('form__group-correcto');
        document.querySelector(`#group__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#group__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__password2 .form-alert__error`).classList.add('form-alert__error-activo');
        campos['password'] = false;
    }else{
        document.getElementById(`group__password2`).classList.remove('form__group-incorrecto');
        document.getElementById(`group__password2`).classList.add('form__group-correcto');
        document.querySelector(`#group__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#group__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#group__password2 .form-alert__error`).classList.remove('form-alert__error-activo');
        campos['password'] = true;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validaForm);
    input.addEventListener('blur', validaForm);
});

formulario.addEventListener('submit', (e)=> {
    e.preventDefault();

    const terminos = document.getElementById('check')


    if(campos.usuario && campos.nombre && campos.password && campos.email && campos.phone && terminos.checked){
        formulario.reset();
        
        document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('form__group-correcto').forEach((icono) =>{
            icono.classList.remove('form__group-correcto'); 
        });

    }else{
        document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo');
        document.getElementById('form__mensaje-error').classList.add('form__mensaje-error-activo');
    }

});

