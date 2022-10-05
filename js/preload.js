var screen = document.createElement('div');
screen.id = 'screen';
screen.classList.add('screen');
var loader = document.createElement('span');
loader.classList.add('loader');
screen.appendChild(loader);

window.onload=function(){
    screen.remove();
    console.log("Page loaded");
}

