function validateForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var storedUserData = localStorage.getItem('userData');
  if (storedUserData) {
    storedUserData = JSON.parse(storedUserData);

    if (email === storedUserData.email && password === storedUserData.password) {
      alert('Login successful!');
      window.location.href = "/src/screens/User/HomePage/index.html"
    } else {
      alert('Invalid email or password. Please try again.');
    }
  } else {
    alert('User data not found. Please register first.');
  }
}

  
  