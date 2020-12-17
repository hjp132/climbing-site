function formSubmission() {
    // this finds all instances of each query and assigns them as the value of each variable
    var form = document.querySelector('.formContainer');
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var message = document.querySelector('.message').value;
    var confirm = document.querySelector('.formConfirm')

    // if name, email and message are all filled then this will be true
    if (name, email, message) {
        // this will then hide all of the form components
        console.log('all criterial filled')
        form.classList.add('hidden')
        // and then it will show the message saying its been confirmed
        confirm.classList.remove('hidden')
    }
    // else {
    //     alert('You havent filled in the form')
    // }
}