function clickToggleBtn (classSelector) {
  const buttonElement = document.querySelector(classSelector);

  if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled');
  } else {
    buttonElement.classList.add('is-toggled');
  }

}