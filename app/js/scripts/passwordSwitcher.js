export default function passwordSwitcher(switchesSelector) {
  const switches = document.querySelectorAll(switchesSelector);

  switches.forEach(switcher => {
    switcher.addEventListener('click', e => {
      const target = e.target;
      const label = target.closest('.form__label');
      const input = label.querySelector('.form__input');

      if(target.classList.contains('form__label-switcher--active')) {
        target.classList.remove('form__label-switcher--active');
        input.setAttribute('type', 'password')
      } else {
        target.classList.add('form__label-switcher--active');
        input.setAttribute('type', 'text')
      }
    });
  });
}