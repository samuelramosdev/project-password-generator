const sliderElement = document.querySelector('#slider');
const buttonElement = document.querySelector('#button');
const sizePassword = document.querySelector('#value');
const password = document.querySelector('#password');
const containerPassword = document.querySelector('#container-password');

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let newPassword = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = () => {
  sizePassword.innerHTML = sliderElement.value;
}

const generatePassword = () => {
  let pass = '';
  for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove('hide');
  password.innerHTML = pass;
  newPassword = pass;
}

const copyPassword = () => {
  alert('Senha copiada com sucesso!');
  navigator.clipboard.writeText(newPassword);
}

buttonElement.addEventListener('click', generatePassword);
containerPassword.addEventListener('click', copyPassword);