const sonic = document.querySelector('.sonic');

const jump = () =>{
    sonic.classList.add('jump');
    setTimeout(() => {

        sonic.classList.remove ('jump');

    }, 500);
}




document.addEventListener("keydown", jump)


