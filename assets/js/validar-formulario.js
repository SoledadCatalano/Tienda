export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }else{
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDeInput, input)
    }
  }
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
  ];
  
  const mensajesDeError = {
    nombre: {
      valueMissing: "Este campo de nome e sobrenome não pode ficar vazio"
    },
    email:{
      valueMissing: "Este campo de e-mail não pode ficar vazio",
      typeMismatch: "O e-mail não é válido"
    },
    asunto:{
      valueMissing: "Este campo de assunto não pode ficar vazio",
    },
    elmensaje:{
      valueMissing: "Este campo de mensagem não pode estar vazio, teste",
    }
  }
  
  const validadores = "";
  
  function mostrarMensajeError(tipoDeInput, input){
    let mensaje= ""
    tipoDeErrores.forEach(error => {
      if(input.validity[error]){
        console.log(tipoDeInput, error);
        console.log(input.validity [error]);
        console.log(mensajesDeError[tipoDeInput] [error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    }
      )
    return mensaje
  }
  
  export function validados(textarea) {
    const tipoDeArea = textarea.dataset.tipo;
    if (validadoresdos[tipoDeArea]) {
      validadoresdos[tipoDeArea](textarea);
    }
    if(textarea.validity.valid){
        textarea.parentElement.classList.remove("textarea-container--invalid");
        textarea.parentElement.querySelector(".textarea-message-error").innerHTML = ""
    }else{
      textarea.parentElement.classList.add("textarea-container--invalid");
      textarea.parentElement.querySelector(".textarea-message-error").innerHTML = mostrarMensajeErrordos(tipoDeArea, textarea)
    }
  }
  const tipoDeErroresdos = [
    "valueMissing",
    "typeMismatch",
  ];
  
  const mensajesDeErrordos = {
    
    elmensaje:{
      valueMissing: "Este campo de mensagem não pode ficar vazio",
    }
  }
  
  const validadoresdos = "";
  
  function mostrarMensajeErrordos(tipoDeArea, textarea){
    let mensajedos= ""
    tipoDeErroresdos.forEach(error => {
      if(textarea.validity[error]){
        console.log(tipoDeArea, error);
        console.log(textarea.validity [error]);
        console.log(mensajesDeErrordos[tipoDeArea] [error]);
        mensajedos = mensajesDeErrordos[tipoDeArea][error];
      }
    }
      )
    return mensajedos
  }