
var messagesRef = firebase.database().ref('Messages');

// Listen for form
document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = getInputVal('name');
    let email = getInputVal('email');
    let message = getInputVal('message');
    
    if (name == "" || email == "" || message == "") {
        showAlert("Please fill out all fields", true);
    }
    else {
        writeUserData(name, email, message);
    }
    
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function writeUserData (name, email, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        Name: name,
        Email: email,
        Message: message
    }, function(error) {
        if (error) {
            showAlert("An Error has occurred. Message did not send.", error);
        }
        else {
            showAlert("Your message has been sent")
            document.getElementById('contact-form').reset();
        }
    });
}

function showAlert(message, error) {
    let alert = document.querySelector('.alert');
    if (error) {
        alert.style.background = '#f22e2e';
        alert.textContent = message;
    }
    else {
        alert.style.background = '#79c879';
        alert.textContent = message;
    }
    alert.style.display = 'block';
    setTimeout(function() {
        alert.style.display = 'none';
    }, 3000);
}