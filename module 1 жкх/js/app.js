let next = document.querySelector('.arrow-right');
let prev = document.querySelector('.arrow-left');

next.addEventListener('click', () => {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').append(items[0]);
})
prev.addEventListener('click', () => {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]);
})


