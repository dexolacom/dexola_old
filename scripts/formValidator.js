const form = document.querySelector('.sidebar_form')
const formInputs = document.querySelectorAll('.sidebar_input')
const emailInput = document.querySelector('.email_input')


form.onsubmit = function () {
  const emailVal = emailInput?.value

  formInputs.forEach(function (input) {
    if (input?.value === '' && input?.id !== 'companyInput') {
      input.classList.add('error')
      setTimeout(function () {
        input.classList.remove('error')
      }, 2000)
    }
  })


  return false
}