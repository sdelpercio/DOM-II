const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        item.style.border = '4px dashed yellow';
    })
})

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
    vroomVroom.style.left = '35%';
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
boatImg.addEventListener('load', () => {
    boatImg.style.transform = 'scale(0.2)';
});

const buttonOne = document.querySelector('.btn');
buttonOne.addEventListener('mousemove', () => {
    buttonOne.style.backgroundColor = 'black';
});

const buttonThree = document.querySelector('.destination:nth-child(3) .btn');
buttonThree.addEventListener('mouseup', () => {
    buttonThree.style.color = 'green';
});





