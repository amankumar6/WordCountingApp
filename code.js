const input = document.querySelector('textarea'),
    characterCount = document.querySelector('#characterCount'),
    wordCount = document.querySelector('#wordCount'),
    btn = document.querySelector('.btn'),
    label = document.querySelector('.label');

input.addEventListener('keyup', () => {
    characterCount.innerHTML = input.value.length;
    let words = input.value.match(/\w+/g);
    if (words) {
        wordCount.innerHTML = words.length;
    } else {
        wordCount.innerHTML = 0;
    }
});

btn.addEventListener('click', () => {
    characterCount.innerHTML = 0;
    wordCount.innerHTML = 0;
    input.value = null;
    M.toast({html: 'Reset'})
})
