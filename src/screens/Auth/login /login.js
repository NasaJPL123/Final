var a = document.getElementById("btnLogin")
function validateForm(e) {
  e.preventDefault()
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var storedUserData = localStorage.getItem('userData');
  if (storedUserData) {
    storedUserData = JSON.parse(storedUserData);
    console.log(email, password)
    if (email === storedUserData.email && password === storedUserData.password) {
      console.log("123");
      console.log(storedUserData)
      window.location.href = "/src/screens/User/HomePage/index.html"
    } else {
      alert('Invalid email or password. Please try again.');
    }
  } else {
    alert('User data not found. Please register first.');
  }
}
a.addEventListener('click', validateForm)

  
  