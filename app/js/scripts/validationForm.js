export function validMail() {
  const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,6}$/i;
  const inputMail = document.getElementById('email');
  const inputValue = inputMail.value
  const label = inputMail.closest('.form__label');
  const message = label.querySelector('.form__label-error');
  const valid = re.test(inputValue);
  if (valid) {
    message.textContent = '';
    localStorage.setItem('email', inputValue);
  } else {
    message.textContent = 'Адрес почты введен не верно!';
  }
  return valid;
};

export function validPhone() {
  const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  const inputPhone = document.getElementById('phone');
  const inputValue = inputPhone.value
  const label = inputPhone.closest('.form__label');
  const message = label.querySelector('.form__label-error');
  const valid = re.test(inputValue.replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '').replace('(', '').replace(')', '').replace('+', ''));
  if (valid) {
    message.textContent = '';
    localStorage.setItem('phone', inputValue);
    return valid;
  } else {
    message.textContent = 'Номер телефона введен не верно!';
  }
};

export function validLogin() {
  const re = /^\s*(\w+)\s*$/;
  const inputLogin = document.getElementById('login');
  const inputValue = inputLogin.value;
  const label = inputLogin.closest('.form__label');
  const message = label.querySelector('.form__label-error');
  const valid = re.test(inputValue);

  if(inputValue.length >= 6 && valid) {
    message.textContent = '';
    localStorage.setItem('login', inputValue);
  } else {
    message.textContent = 'Логин должен быть не менее 6 символов на латинице без пробелов';
  }
  return valid;

};

export function validPassword() {
  const re = /^\s*(\w+)\s*$/;
  const inputPassword = document.getElementById('password');
  const inputValue = inputPassword.value;
  const label = inputPassword.closest('.form__label');
  const message = label.querySelector('.form__label-error');
  const valid = re.test(inputValue);

  if(inputValue.length >= 6 && valid) {
    message.textContent = '';
    localStorage.setItem('password', inputValue);
  } else {
    message.textContent = 'Пароль должен быть не менее 8 символов на латинице без пробелов';
  }
  return valid;
}

export function validPasswordRepeat() {
  const inputPasswordRepeat = document.getElementById('password-repeat');
  const label = inputPasswordRepeat.closest('.form__label');
  const message = label.querySelector('.form__label-error');
  const password = document.getElementById('password').value;
  const passwordRepeat = inputPasswordRepeat.value;
  const valid = password === passwordRepeat;


  if (valid) {
    message.textContent = ''
    return valid;
  } else {
    message.textContent = 'Пароли не совпадают';
  }
}
