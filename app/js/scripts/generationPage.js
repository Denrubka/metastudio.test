export default function generationPage(pathName) {
  if (pathName === 'index' && localStorage.getItem('login')) {
    const wrapper = document.querySelector('.wrapper');
    const login = localStorage.getItem('login');

    wrapper.innerHTML = `
      <h2 class="wrapper__title">Здравствуйте, ${login}</h2>
        <a href="index.html" class="btn btn-logout">Выйти</a>
    `
  } else if (pathName === 'index' && !localStorage.getItem('login')) {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = `
      <h2 class="wrapper__title">Главная</h2>
        <a href="signup.html" class="btn">Зарегистрироваться</a>
    `
  }
}