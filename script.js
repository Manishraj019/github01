const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value;

  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  // Replace this with your real login handling logic.
  alert(`Logged in as ${email}`);
  form.reset();
});
