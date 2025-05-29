const form = document.querySelector('.login-form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userData = {
        email: e.target.elements.email.value.trim(),
        password: e.target.elements.password.value.trim(),
    };
    if (!userData.email || !userData.password) {
        alert('All form fields must be filled in');
        return;
    }

    console.log(userData);
    e.target.reset();
});