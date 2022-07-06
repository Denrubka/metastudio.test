import passwordSwitcher from "./scripts/passwordSwitcher";
import labelTitleToggle from "./scripts/labelTitleToggle";
import maskPhone from "./scripts/mask";
import generationPage from "./scripts/generationPage";
import {validLogin, validMail, validPhone, validPassword, validPasswordRepeat } from "./scripts/validationForm";

const page = window.location.pathname.replace('/', '').replace('.html', '');
const host = window.location.host;


document.addEventListener('DOMContentLoaded', () => {
  if (page === 'signup') {
    const btnSignup = document.querySelector('.btn-signup');
    btnSignup.addEventListener('click', () => {
      const isValidLogin = validLogin();
      const isValidMail = validMail();
      const isValidPhone = validPhone();
      const isValidPassword = validPassword();
      const isValidPasswordRepeat = validPasswordRepeat();

      if(isValidLogin && isValidMail && isValidPhone && isValidPassword && isValidPasswordRepeat) {
        window.location.href = 'http://' + host + '/index.html';
        generationPage(page);
      }
    });
  }

  if (page === 'index' && localStorage.getItem('login')) {
    const btnLogout = document.querySelector('.btn-logout');
    console.log(btnLogout)

    btnLogout.addEventListener('click', () => {
        localStorage.clear();
        window.location.href = 'http://' + host + '/index.html';
        generationPage(page);
    });
  };
});

generationPage(page);
maskPhone('#phone')
passwordSwitcher('.form__label-switcher');
labelTitleToggle('.form__label');