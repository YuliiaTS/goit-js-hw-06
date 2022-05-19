const formEl = document.querySelector('.login-form');

const onformControl = formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {
    alert('Потрібно заповнити всі поля форми');
  } else {
    const newEmail = email;
    const newPassword = password;

    const formData = {
      newEmail,
      newPassword,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
