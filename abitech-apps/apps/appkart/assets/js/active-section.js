/* ====================
1. Model filter emoji
=======================*/
const emojiItems = document.querySelectorAll('.emoji-items li');
emojiItems.forEach(item => {
    item.addEventListener('click', function () {
        emojiItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});


/* ==================
2. Hotel booking Home JS
=====================*/
document.querySelectorAll('.hotel-tab li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.hotel-tab li').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});


/* ======================
3. Blog change follow button 
==========================*/
document.querySelectorAll('.follow-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('following');
        btn.textContent = btn.classList.contains('following') ? 'Following' : 'Follow';
    });
});


