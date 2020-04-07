
var messagesRef = firebase.database().ref('Messages');

// Listen for form
document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = getInputVal('name');
    let email = getInputVal('email');
    let message = getInputVal('message');
    
    writeUserData(name, email, message);
    
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
            document.querySelector('.alert').style.background = '#f22e2e';
        }
        else {
            document.querySelector('.alert').style.background = '#79c879';
        }
    });

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
    document.getElementById('contact-form').reset();
}