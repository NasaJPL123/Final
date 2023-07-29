function validateForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === 'Admin' && password === '1234') {
    alert('Login successful!');
    window.location.href = "/src/screens/Admin/ManagerProduct/Admin.html";
  } else {
    alert('Invalid username or password. Please try again.');
  }
}


  
  