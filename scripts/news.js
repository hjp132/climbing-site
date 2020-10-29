function myFunction(articleID) {
    var rShow = document.querySelector('.show');
    if (rShow) {
        rShow.classList.remove('show');
        rShow.classList.add('hidden')
    }


    var elem = document.getElementById(articleID);
    elem.classList.remove('hidden');
    elem.classList.add('show')


}