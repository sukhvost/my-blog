const btn = document.querySelector('.btn');
const wrapForm = document.querySelector('.wrap_form');
const closeBtn = document.querySelector('.x_close');
const page = document.querySelector('.wrap_page');

btn.onclick = () => {
    wrapForm.style.display = 'block';
}
closeBtn.onclick = () => {
    wrapForm.style.display = 'none';
}