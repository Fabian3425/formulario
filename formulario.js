const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
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
           
        break;
        case "password2":
            
        break;
        case "emil":
            
        break;
        case "phone":
            
        break;

    };
}

const validarCampo = (expresion, input, campo) => {
        if(expresion.test(input.value)){
            document.getElementById(`group__${campo}`).classList.remove('form__group-incorrecto');
            document.getElementById(`group__${campo}`).classList.add('form__group-correcto');   
            document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__${campo} .form-alert__error`).classList.remove('form-alert__error-activo');
        }else{
            document.getElementById(`group__${campo}`).classList.add('form__group-incorrecto');
            document.getElementById(`group__${campo}`).classList.remove('form__group-correcto');
            document.querySelector(`#group__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#group__${campo} .form-alert__error`).classList.add('formulario__input-error-activo');
        }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validaForm);
    input.addEventListener('blur', validaForm);
});

formulario.addEventListener('submit', (e)=> {
    e.preventDefault();
});

