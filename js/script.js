const menuSection = document.querySelector('.menu-section');
const bars = document.querySelector('.bars');
const relogio = document.querySelector('.relogio');
const liWith = document.querySelector('.rds-conteiner').clientWidth;
const allLi = document.querySelectorAll('.rds-conteiner');

// seletores de father_dot
const fatherDot1 = document.querySelector('.father_dot_1');
const fatherDot2 = document.querySelector('.father_dot_2');
const fatherDot3 = document.querySelector('.father_dot_3');
const fatherDot4 = document.querySelector('.father_dot_4');
const fatherDot5 = document.querySelector('.father_dot_5');

const handleScrollToPageBottom = () => {
    const header = document.querySelector('.header');
    const { scrollTop } = document.documentElement;
    if (!scrollTop) {
        header.style.boxShadow = '0px 0px 0px black'
        header.style.background = ''
        header.style.transition = '0.3s ease-in-out'
        return
    }
    header.style.boxShadow = '0px 0px 10px black'
    header.style.background = '#130725'
    header.style.transition = '0.3s ease-in-out'
};

bars.addEventListener('click', () => {
    menuSection.classList.toggle('on');
})


window.addEventListener('scroll', () => handleScrollToPageBottom());

const horas = () => {
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const hr = hora < 10 ? `0${hora}` : hora;
    const mn = minutos < 10 ? `0${minutos}` : minutos;
    const ss = segundos < 10 ? `0${segundos}` : segundos;
    relogio.innerHTML = `<p>${hr}:${mn}:${ss}</p>`
};

setInterval(() => {
    horas();
}, 1000);

const rezetLi = () => {
    fatherDot1.classList.remove('dot_active')
    fatherDot2.classList.remove('dot_active')
    fatherDot3.classList.remove('dot_active')
    fatherDot4.classList.remove('dot_active')
    fatherDot5.classList.remove('dot_active')
}

allLi.forEach((li, index) => {
    li.addEventListener('click', (e) => {
        switch(index){
            case 0 :
                rezetLi();
                fatherDot1.classList.add('dot_active');
            break   
            case 1 :
                rezetLi();
                fatherDot2.classList.add('dot_active');
            break   
            case 2 :
                rezetLi();
                fatherDot3.classList.add('dot_active');
            break   
            case 3 :
                rezetLi();
                fatherDot4.classList.add('dot_active');
            break    
            case 4 :
                rezetLi();
                fatherDot5.classList.add('dot_active');
            break    
        }  
    });
});
