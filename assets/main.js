let abrir = document.getElementById('open');
let menu = document.getElementById('menu');
let cerrado = true;
abrir.addEventListener('click', apertura);


function apertura(){
    if(cerrado){
        menu.style.height = '70vh';
        cerrado = false;
    }
    else{
        menu.style.overflow =  'hidden';
        menu.style.height = '0';
        cerrado = true;
    }

}

window.addEventListener('resize', res);
function res() {
    if(screen.width > 1024){
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('height');
        cerrado = true;
    }
}

