const form = document.querySelector('.sidebar_form')
const formInputs = document.querySelectorAll('.sidebar_input')
const emailInput = document.querySelector('.email_input')

function validateEmail (email) {
  const regex =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return regex.test(String(email).toLowerCase())
}

form.onsubmit = function () {
  const emailVal = emailInput?.value
  const emptyInputs = Array.from(formInputs).filter(input => input?.value === '' && input?.id !== 'companyInput')

  formInputs.forEach(function (input) {
    if (input?.value === '' && input?.id !== 'companyInput') {
      input.classList.add('error')
      setTimeout(function () {
        input.classList.remove('error')
      }, 2000)
    }
  })

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled')
    return false
  }

  if (!validateEmail(emailVal)) {
    console.log('email not valid')
    emailInput.classList.add('error')
    setTimeout(function () {
      emailInput.classList.remove('error')
    }, 2000)
    return false
  }

}