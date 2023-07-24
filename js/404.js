const btn404 = document.querySelector('#btn404');

btn404.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    btn404.style.setProperty('top', randomY+'%');
    btn404.style.setProperty('left', randomX+'%');
    btn404.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})