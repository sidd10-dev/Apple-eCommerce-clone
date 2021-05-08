const images = document.querySelectorAll('.img');
images[0].classList.add('change');
let a = 1;
setInterval(() => {
    const img = document.querySelector('.change');
    if(a<images.length)
    {
        a++;
        img.classList.remove('change');
        img.nextElementSibling.classList.add('change');
    } else {
        images[4].classList.remove('change');
        images[0].classList.add('change');
        a = 1;
    }
},10000);

//controls
let x = 0;
let y = 0;
let z = 0;
const controls = document.querySelector('.controls');
const cube = document.querySelector('.cube');
const topx = document.querySelector('.x-up');
const bottomx = document.querySelector('.x-down');
const topy = document.querySelector('.y-up');
const bottomy = document.querySelector('.y-down');
const topz = document.querySelector('.z-up');
const bottomz = document.querySelector('.z-down');
let interval = setInterval(()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 1}deg) rotateZ(${z}deg)`;
    },100);
controls.addEventListener('mouseover', () => {
    clearInterval(interval);
})
controls.addEventListener('mouseout', () => {
    interval = setInterval(()=>{
        cube.style.transform = `rotateX(${x}deg) rotateY(${y += 1}deg) rotateZ(${z}deg)`;
        },100);;
})
topx.addEventListener('click',() => {
    cube.style.transform = `rotateX(${x += 10}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
})
bottomx.addEventListener('click',() => {
    cube.style.transform = `rotateX(${x -= 10}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
})
topy.addEventListener('click',() => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 10}deg) rotateZ(${z}deg)`;
})
bottomy.addEventListener('click',() => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 10}deg) rotateZ(${z}deg)`;
})
topz.addEventListener('click',() => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 10}deg)`;
})
bottomz.addEventListener('click',() => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 10}deg)`;
})


// Watch controls
const toparrow = document.querySelector('.arrow-top');
const bottomarrow = document.querySelector('.arrow-bottom');
const leftarrow = document.querySelector('.arrow-left');
const rightarrow = document.querySelector('.arrow-right');
const cases = document.querySelector('.watch-case');
const bands = document.querySelector('.watch-bands');
let X = 0;
let Y = 0;
const arrowcheck = () => {
    if(X === 60)
    {
        leftarrow.classList.add('change');
    } else {
        leftarrow.classList.remove('change');
    }
    if(X === -75)
    {
        rightarrow.classList.add('change');
    } else {
        rightarrow.classList.remove('change');
    }
    if(Y === 60)
    {
        bottomarrow.classList.add('change');
    } else {
        bottomarrow.classList.remove('change');
    }
    if(Y === -75)
    {
        toparrow.classList.add('change');
    } else {
        toparrow.classList.remove('change');
    }
}
toparrow.addEventListener('click', () => {
    cases.style.transform = `translateY(${Y = Y - 15}rem)`;
    arrowcheck();
})
bottomarrow.addEventListener('click', () => {
    cases.style.transform = `translateY(${Y = Y + 15}rem)`;
    arrowcheck();
})
leftarrow.addEventListener('click', () => {
    bands.style.transform = `translateX(${X = X + 15}rem)`;
    arrowcheck();
})
rightarrow.addEventListener('click', () => {
    bands.style.transform = `translateX(${X = X - 15}rem)`;
    arrowcheck();
})