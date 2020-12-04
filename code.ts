const input:any = document.querySelector('textarea'),
    characterCount:any = document.querySelector('#characterCount'),
    wordCount:any = document.querySelector('#wordCount');

input.addEventListener('keyup', () => {
    characterCount.innerHTML = input.value.length;
    let words = input.value.match(/\w+/g);
    words ? wordCount.innerHTML = words.length : wordCount.innerHTML = 0;
});

document.querySelector('.btn').addEventListener('click', () => {
    characterCount.innerHTML = 0;
    wordCount.innerHTML = 0;
    input.value = null;
    M.toast({html: 'Reset'})
})