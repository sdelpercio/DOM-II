const header = document.querySelector('.main-navigation');
header.addEventListener('click', () => {
    header.style.backgroundColor = 'magenta';
});

const introHeader = document.querySelector('.intro');
const vroomVroom = document.createElement('h1');
const bus = document.querySelector('.intro img');
bus.addEventListener('mouseenter', () => {
    bus.style.position = 'relative';

    vroomVroom.textContent = '💨';
    vroomVroom.style.position = 'absolute';
    vroomVroom.style.top = '20%';
    vroomVroom.style.left = '30%';
    vroomVroom.style.transform = 'rotate(180deg)';
    introHeader.appendChild(vroomVroom);
});

bus.addEventListener('mouseleave', () => {
    vroomVroom.textContent = '';
});

const paras = document.querySelectorAll('p, h2, h4');
paras.forEach(item => {
    item.addEventListener('copy', () => {
        alert("Hey, don't copy me!!!");
    });
});

paras.forEach(item => {
    item.addEventListener('dblclick', () => {
        item.style.backgroundColor = 'orange';
    });
});

paras.forEach(item => {
    item.addEventListener('auxclick', () => {
        item.style.fontSize = '48px';
    });
});

const mapImg = document.querySelector('.img-content img');
mapImg.addEventListener('drag', () => {
    mapImg.style.border = '100px solid blue';
});

const boatImg = document.querySelector('.inverse-content .img-content img');
boatImg.addEventListener('dragover', () => {
    boatImg.style.transition = 'scale(0.2)';
});





