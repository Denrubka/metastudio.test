export default function labelTitleToggle(labelSelector) {
  const labels = document.querySelectorAll(labelSelector);

  labels.forEach(label => {
    const input = label.querySelector('input');
    const labelTitle = label.querySelector('.form__label-title');

    input.addEventListener('input', () => {
      if(input.value) {
        labelTitle.classList.add('form__label-title--active');
      } else {
        labelTitle.classList.remove('form__label-title--active');
      }
    });
    input.addEventListener('blur', () => {
      if(!input.value.length) {
        labelTitle.classList.remove('form__label-title--active');
      }
    });
  });

};