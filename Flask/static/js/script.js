document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        applicationDate: document.getElementById('applicationDate').value,
        branch: document.getElementById('branch').value,
        password: document.getElementById('password').value,
    };

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        console.log(data.data);
    })
    .catch(error => console.error('Error:', error));
});
