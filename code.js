let input = document.querySelector('textarea'),
    characterCount = document.querySelector('#characterCount'),
    wordCount = document.querySelector('#wordCount'),
    toastHTML = `<span style="font-family: 'Nunito', sans-serif ">Cleared</span>`;

input.addEventListener('keyup', () => {
    characterCount.innerHTML = input.value.length;
    let words = input.value.match(/\w+/g);
    words ? (wordCount.innerHTML = words.length) : (wordCount.innerHTML = 0);
});

document.querySelector('.btn').addEventListener('click', () => {
    if (input.value == 0) return;
    characterCount.innerHTML = 0;
    wordCount.innerHTML = 0;
    input.value = null;
    input.style.height = '45px';
    M.toast({ html: toastHTML });
});
