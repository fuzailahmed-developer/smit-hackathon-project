//* LocalStore
const signupUsers = JSON.parse(localStorage.getItem('users')) || []
const isLogin = JSON.parse(localStorage.getItem('isLogin')) || false


if (isLogin) {
  window.location.href = '../../home.html'
}

//* popup
const alertModel = (type = 'alert-success', text) => {

  const alert = document.querySelector('#alert')
  alert.classList.add(type, 'alert-popup')
  alert.innerHTML = text

  console.log(alert)

  setTimeout(() => {
    alert.classList.remove('alert-popup',type)
  }, 2000);

}



//* Handle Signup

const signupName = document.getElementById('name-signup')
const signupEmail = document.getElementById('email-signup')
const signupPassword = document.getElementById('password-signup')

const handleSignup = (e) => {
  e.preventDefault()

  const id = crypto.randomUUID()
  const name = signupName.value.trim()
  const email = signupEmail.value.trim()
  const password = signupPassword.value.trim()

  if (!name || !email || !password) {
    return alertModel('alert-danger', '⚠️ Please fill all field')
  }

  const isUserAlreadyExist = signupUsers?.find((user) => user.email == email)

  if (isUserAlreadyExist) return alertModel('alert-danger', '⚠️ User Already Exist...!')

  signupUsers.push({
    id,
    name,
    email,
    password
  })

  localStorage.setItem('users', JSON.stringify(signupUsers))

  alertModel("alert-success", '✅ Signup Successful')

  clearFields()

}

//* Signin

const signinEmail = document.getElementById('email-login')
const signinPassword = document.getElementById('password-login')


const signinAccount = (e) => {

  e.preventDefault()

  const email = signinEmail.value.trim()
  const password = signinPassword.value.trim()

  if (!email || !password) return alertModel('alert-danger', '⚠️ Please fill all field')

  const isUserAlreadyExist = signupUsers.find((user) => user.email == email)

  if (!isUserAlreadyExist) return alertModel('alert-danger', "⚠️ User Doesn't Already Exist")

  const isPasswordValid = signupUsers.find((user) => user.password == password)

  if (!isPasswordValid) return alertModel('alert-danger', "⚠️ Invalid Password")


  alertModel("alert-success", "✅ Signin Successful")
  localStorage.setItem('isLogin',JSON.stringify(true))
  window.location.href = '../../home.html'

  clearFields()


}

//* Clear Fields
function clearFields() {
  signupName.value = ""
  signupEmail.value = ""
  signupPassword.value = ""
  signinEmail.value = ""
  signinPassword.value = ""
}
