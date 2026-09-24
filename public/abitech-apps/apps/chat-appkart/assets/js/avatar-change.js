/* ======================
1.Avatar image change Js
=========================*/
const selectedAvatar = document.getElementById('selectedAvatar');
const fileInputs = ['capture-image', 'file'].map(id => document.getElementById(id));
const avatars = document.querySelectorAll('.avatar-list li img, .square-avatar-list li img');
const resetBtn = document.querySelector('[data-icon="not-allowed-3"]');
const defaultAvatar = "../assets/images/chatting/avatar/12.png";

function setAvatar(src, isSquare = false) {
    selectedAvatar.src = src;
    selectedAvatar.classList.toggle('square', isSquare);
}

avatars.forEach(img => {
    img.addEventListener('click', () => {
        avatars.forEach(i => i.parentElement.classList.remove('active'));
        img.parentElement.classList.add('active');
        setAvatar(img.src, !!img.closest('.square-avatar-list'));
    });
});
resetBtn?.addEventListener('click', () => {
    setAvatar(defaultAvatar, false);
    avatars.forEach(i => i.parentElement.classList.remove('active'));
    fileInputs.forEach(input => input.value = '');
});
fileInputs.forEach(input => {
    input?.addEventListener('change', e => {
        const file = e.target.files[0];
        if (file) {
            setAvatar(URL.createObjectURL(file), false);
            avatars.forEach(i => i.parentElement.classList.remove('active'));
        }
    });
});
document.querySelectorAll('.edit-icon').forEach(icon => {
    const type = icon.getAttribute('data-icon');
    icon.addEventListener('click', () => {
        if (type === 'camera') fileInputs[0]?.click();
        if (type === 'picture') fileInputs[1]?.click();
        if (type === 'not-allowed-3') resetBtn?.click();
    });
});
