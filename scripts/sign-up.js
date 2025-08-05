const userData = [{
  username: '',
  email: '',
  password: ''
}];

function addData () {
  const userNameInputElement = document.querySelector('.js-username');
  const emailInputElement = document.querySelector('.js-email');
  const passwordInputElement = document.querySelector('.js-password');

  const username = userNameInputElement.value;
  const email = emailInputElement.value;
  const password = passwordInputElement.value;

  userData.push({
    username,
    email,
    password
  });

  console.log(userData);
}