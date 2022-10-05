const wrapperMenu = document.querySelector('.wrapper-menu');
const menu = document.getElementById('menu');
wrapperMenu.addEventListener('click', function(){
    menu.classList.toggle('flex-row');
    menu.classList.toggle('flex-column');
    menu.classList.toggle('hidden');   
    menu.classList.toggle('opened'); 
    wrapperMenu.classList.toggle('open');
    document.body.classList.toggle('bodypadding')
})

window.addEventListener('resize', function(){
    if (window.innerWidth > 768) {
        menu.classList.add('hidden');
        menu.classList.add('flex-row');
        menu.classList.remove('flex-column');
        wrapperMenu.classList.remove('open');
    }
})