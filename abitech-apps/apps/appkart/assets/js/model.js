
/* =================
1. Email model js
===================*/
document.querySelector('.verify-button').addEventListener('click', function () {
    const modal = bootstrap.Modal.getInstance(document.getElementById('email-model'));
    modal.hide();
    document.getElementById('email').value = '';
    document.querySelector('.email-error').style.display = 'none';
});
