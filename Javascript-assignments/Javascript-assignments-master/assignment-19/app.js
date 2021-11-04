// create a basic form in html which takes user's name, age, email, password and submits it
// - Clear the form after submission
// - Store the data submitted by the user in localStorage

const nameInput = document.getElementById('name')
const ageInput = document.getElementById('age')
const emailInput = document.getElementById('email')
const passwrdInput = document.getElementById('password')

document.getElementById('submitButton').addEventListener('click', (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const age = ageInput.value;
    const email = emailInput.value;
    const passwrd = passwrdInput.value;

    const data = {
        name, age, email, passwrd
    }
    console.log(data)
    
    localStorage.setItem('userData', JSON.stringify(data))

    nameInput.value = ""
    ageInput.value = ""
    emailInput.value = ""
    passwrdInput.value = ""
})

