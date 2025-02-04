const signUp = document.querySelector('#signUp');
const signIn = document.querySelector('#signIn');
const underline = document.querySelector('#underline');
const title = document.querySelector('#title');
const nameField = document.querySelector('#nameField');
const text = document.querySelector('#text');

signIn.addEventListener('click', function () {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    underline.style.transform = 'translatex(33px)';
    text.innerHTML = 'Lost Password';
    signIn.classList.remove('disable');
    signUp.classList.add('disable');
})

signUp.addEventListener('click', function () {
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestion';
    underline.style.transform = 'translatex(0)';
    signUp.classList.remove('disable');
    signIn.classList.add('disable');

})