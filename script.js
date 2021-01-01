document.getElementById('my-btn').addEventListener('click', myFunction)
function myFunction () {
  let age = document.getElementById('my-text').value
  age = parseInt(age)
  if (age >= 17) {
    alert('You can see a R rated movie.')
  } else if (age >= 17) {
    alert('You can see a PG-13 move movie.')
  } else if (age >= 13) {
    alert('You can see a G or PG move movie.')
  } else {
    alert('ummmmmm you are too young for most things.')
  }
  alert('Thank you for verifying your age!')
}
