function formSubmission() {
    var form = document.querySelector('.formContainer');
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var message = document.querySelector('.message').value;
    var confirm = document.querySelector('.formConfirm')

    if (name, email, message) {
        console.log('all criterial filled')
        form.classList.add('hidden')
        confirm.classList.remove('hidden')
    }
    else {
        alert('You havent filled in the form')
    }
}