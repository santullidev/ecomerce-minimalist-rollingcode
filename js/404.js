const btn404 = document.querySelector('#btn404');

btn404.addEventListener('mouseover', function () {
    const minX = 10;
    const maxX = 70;
    const minY = 10;
    const maxY = 70;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    btn404.style.setProperty('top', randomY + '%');
    btn404.style.setProperty('left', randomX + '%');
    btn404.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
})