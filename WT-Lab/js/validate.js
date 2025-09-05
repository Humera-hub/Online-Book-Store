
(function () {
  const form = document.getElementById('regform');
  if (!form) return;
  const alertBox = document.getElementById('alertBox');

  function showError(msg) {
    if (!alertBox) return alert(msg);
    alertBox.textContent = msg;
    alertBox.classList.remove('d-none');
  }
  function hideError() {
    if (!alertBox) return;
    alertBox.classList.add('d-none');
    alertBox.textContent = '';
  }

  form.addEventListener('submit', function (e) {
    hideError();
    const fname = form.fname.value.trim();
    const lname = form.lname.value.trim();
    const pw = form.pwd.value;
    const cpw = form.cpwd.value;
    const email = form.email.value.trim();
    const ph = form.phno.value.trim();
    const terms = form.querySelector('#terms');

    // First name: at least 6 characters, no special characters
    if (fname.length < 6) {
      e.preventDefault(); return showError('First name must have at least 6 characters.');
    }
    const spl = /[!@#$%^&*()+=\[\]{};:'"\\|,.<>/?~]/;
    if (spl.test(fname)) {
      e.preventDefault(); return showError('First name should not contain special characters.');
    }

    // Password length and match
    if (pw.length < 6) {
      e.preventDefault(); return showError('Password must contain at least 6 characters.');
    }
    if (pw !== cpw) {
      e.preventDefault(); return showError('Passwords do not match.');
    }

    // Email basic check
    if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)) {
      e.preventDefault(); return showError('Please enter a valid email address.');
    }

    // Phone: 10 digits
    if (!/^\\d{10}$/.test(ph)) {
      e.preventDefault(); return showError('Phone number must be 10 digits.');
    }

    // Terms
    if (terms && !terms.checked) {
      e.preventDefault(); return showError('Please agree to the terms and conditions.');
    }
  });
})();
